import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type ServiceType = {
    #wiringContract;
    #tvPoint;
    #geyser;
    #maintenance;
    #fanFitting;
    #otherElectricalWork;
  };

  type BookingStatus = {
    #pending;
    #inProgress;
    #completed;
    #cancelled;
  };

  type BookingRequest = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    serviceType : ServiceType;
    message : Text;
    timestamp : Time.Time;
    status : BookingStatus;
  };

  let bookingRequests = Map.empty<Nat, BookingRequest>();
  var nextBookingId = 1;

  type BookingRequestInput = {
    name : Text;
    phone : Text;
    email : Text;
    serviceType : ServiceType;
    message : Text;
  };

  public shared ({ caller }) func submitBookingRequest(input : BookingRequestInput) : async Nat {
    let bookingRequest : BookingRequest = {
      id = nextBookingId;
      name = input.name;
      phone = input.phone;
      email = input.email;
      serviceType = input.serviceType;
      message = input.message;
      timestamp = Time.now();
      status = #pending;
    };

    bookingRequests.add(nextBookingId, bookingRequest);
    nextBookingId += 1;
    bookingRequest.id;
  };

  public shared ({ caller }) func updateBookingStatus(bookingId : Nat, newStatus : BookingStatus) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update booking status");
    };

    switch (bookingRequests.get(bookingId)) {
      case (null) { Runtime.trap("Booking request not found") };
      case (?bookingRequest) {
        let updatedRequest = {
          bookingRequest with
          status = newStatus;
        };
        bookingRequests.add(bookingId, updatedRequest);
      };
    };
  };

  public query ({ caller }) func getAllBookingRequests() : async [BookingRequest] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all booking requests");
    };
    bookingRequests.values().toArray();
  };

  public query ({ caller }) func getBookingRequest(bookingId : Nat) : async ?BookingRequest {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view booking requests");
    };
    bookingRequests.get(bookingId);
  };

  public query ({ caller }) func getBookingRequestsByStatus(status : BookingStatus) : async [BookingRequest] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view booking requests");
    };
    bookingRequests.values().toArray().filter(
      func(request) {
        request.status == status;
      }
    );
  };
};
