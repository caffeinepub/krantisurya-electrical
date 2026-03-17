import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface BookingRequestInput {
    serviceType: ServiceType;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface BookingRequest {
    id: bigint;
    status: BookingStatus;
    serviceType: ServiceType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export enum BookingStatus {
    cancelled = "cancelled",
    pending = "pending",
    completed = "completed",
    inProgress = "inProgress"
}
export enum ServiceType {
    otherElectricalWork = "otherElectricalWork",
    tvPoint = "tvPoint",
    fanFitting = "fanFitting",
    maintenance = "maintenance",
    geyser = "geyser",
    wiringContract = "wiringContract"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllBookingRequests(): Promise<Array<BookingRequest>>;
    getBookingRequest(bookingId: bigint): Promise<BookingRequest | null>;
    getBookingRequestsByStatus(status: BookingStatus): Promise<Array<BookingRequest>>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerAdmin(): Promise<boolean>;
    submitBookingRequest(input: BookingRequestInput): Promise<bigint>;
    updateBookingStatus(bookingId: bigint, newStatus: BookingStatus): Promise<void>;
}
