import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogIn, LogOut, RefreshCw, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { BookingStatus, ServiceType } from "../backend.d";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useAllBookings, useUpdateBookingStatus } from "../hooks/useQueries";

const serviceLabels: Record<ServiceType, string> = {
  [ServiceType.wiringContract]: "Wiring Contract",
  [ServiceType.tvPoint]: "TV Point",
  [ServiceType.geyser]: "Geyser",
  [ServiceType.maintenance]: "Maintenance",
  [ServiceType.fanFitting]: "Fan Fitting",
  [ServiceType.otherElectricalWork]: "All Electrical Work",
};

const statusColors: Record<BookingStatus, string> = {
  [BookingStatus.pending]: "bg-yellow-100 text-yellow-800 border-yellow-200",
  [BookingStatus.inProgress]: "bg-blue-100 text-blue-800 border-blue-200",
  [BookingStatus.completed]: "bg-green-100 text-green-800 border-green-200",
  [BookingStatus.cancelled]: "bg-red-100 text-red-800 border-red-200",
};

const statusLabels: Record<BookingStatus, string> = {
  [BookingStatus.pending]: "Pending",
  [BookingStatus.inProgress]: "In Progress",
  [BookingStatus.completed]: "Completed",
  [BookingStatus.cancelled]: "Cancelled",
};

export default function AdminPage() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const isLoggedIn = loginStatus === "success" && !!identity;
  const { data: bookings, isLoading, refetch } = useAllBookings();
  const { mutate: updateStatus, isPending: isUpdating } =
    useUpdateBookingStatus();
  const [updatingId, setUpdatingId] = useState<bigint | null>(null);

  const handleStatusChange = (id: bigint, status: BookingStatus) => {
    setUpdatingId(id);
    updateStatus(
      { id, status },
      {
        onSuccess: () => {
          toast.success("Status updated");
          setUpdatingId(null);
        },
        onError: () => {
          toast.error("Update failed");
          setUpdatingId(null);
        },
      },
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navy text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-orange" />
          </div>
          <div>
            <p className="font-bold text-lg leading-tight">
              Krantisurya Electrical
            </p>
            <p className="text-white/60 text-xs">Admin Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <span className="text-sm text-white/70 hidden sm:block">
                {identity.getPrincipal().toString().slice(0, 16)}…
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={clear}
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                data-ocid="admin.secondary_button"
              >
                <LogOut className="w-4 h-4 mr-1" /> Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={login}
              disabled={loginStatus === "logging-in"}
              className="bg-orange hover:bg-orange/90 text-white"
              data-ocid="admin.primary_button"
            >
              <LogIn className="w-4 h-4 mr-1" />
              {loginStatus === "logging-in" ? "Logging in..." : "Login"}
            </Button>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {!isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-32 text-center"
            data-ocid="admin.panel"
          >
            <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mb-6">
              <LogIn className="w-10 h-10 text-navy" />
            </div>
            <h2 className="text-2xl font-extrabold text-navy mb-3">
              Admin Access Required
            </h2>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Login with Internet Identity to view and manage booking requests.
            </p>
            <Button
              onClick={login}
              disabled={loginStatus === "logging-in"}
              className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full font-semibold"
              data-ocid="admin.primary_button"
            >
              <LogIn className="w-4 h-4 mr-2" />
              {loginStatus === "logging-in"
                ? "Logging in..."
                : "Login with Internet Identity"}
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-extrabold text-navy">
                  Booking Requests
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  {bookings?.length ?? 0} total booking
                  {(bookings?.length ?? 0) !== 1 ? "s" : ""}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => refetch()}
                className="flex items-center gap-2"
                data-ocid="admin.secondary_button"
              >
                <RefreshCw className="w-4 h-4" /> Refresh
              </Button>
            </div>

            <Card
              className="border border-border shadow-sm"
              data-ocid="admin.table"
            >
              <CardHeader className="border-b pb-4">
                <CardTitle className="text-base font-semibold text-navy">
                  All Bookings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {isLoading ? (
                  <div
                    className="p-6 space-y-3"
                    data-ocid="admin.loading_state"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Skeleton key={n} className="h-12 w-full rounded" />
                    ))}
                  </div>
                ) : !bookings || bookings.length === 0 ? (
                  <div
                    className="py-20 text-center text-muted-foreground"
                    data-ocid="admin.empty_state"
                  >
                    <Zap className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p className="font-medium">No bookings yet</p>
                    <p className="text-sm">Booking requests will appear here</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-secondary/50">
                          <TableHead className="font-semibold text-navy">
                            ID
                          </TableHead>
                          <TableHead className="font-semibold text-navy">
                            Name
                          </TableHead>
                          <TableHead className="font-semibold text-navy">
                            Phone
                          </TableHead>
                          <TableHead className="font-semibold text-navy">
                            Email
                          </TableHead>
                          <TableHead className="font-semibold text-navy">
                            Service
                          </TableHead>
                          <TableHead className="font-semibold text-navy">
                            Message
                          </TableHead>
                          <TableHead className="font-semibold text-navy">
                            Date
                          </TableHead>
                          <TableHead className="font-semibold text-navy">
                            Status
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bookings.map((booking, i) => (
                          <TableRow
                            key={String(booking.id)}
                            className="hover:bg-secondary/30"
                            data-ocid={`admin.row.${i + 1}`}
                          >
                            <TableCell className="font-mono text-xs text-muted-foreground">
                              #{String(booking.id)}
                            </TableCell>
                            <TableCell className="font-medium">
                              {booking.name}
                            </TableCell>
                            <TableCell>{booking.phone}</TableCell>
                            <TableCell className="text-sm">
                              {booking.email || "—"}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {serviceLabels[booking.serviceType] ??
                                  booking.serviceType}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm max-w-[180px] truncate text-muted-foreground">
                              {booking.message || "—"}
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground">
                              {new Date(
                                Number(booking.timestamp) / 1_000_000,
                              ).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <Select
                                value={booking.status}
                                onValueChange={(v) =>
                                  handleStatusChange(
                                    booking.id,
                                    v as BookingStatus,
                                  )
                                }
                                disabled={
                                  isUpdating && updatingId === booking.id
                                }
                              >
                                <SelectTrigger
                                  className={`w-36 text-xs h-8 border font-medium ${statusColors[booking.status]}`}
                                  data-ocid="admin.select"
                                >
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {Object.values(BookingStatus).map((s) => (
                                    <SelectItem
                                      key={s}
                                      value={s}
                                      className="text-xs"
                                    >
                                      {statusLabels[s]}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
}
