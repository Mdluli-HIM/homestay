import { Suspense } from "react";
import { PageMotion } from "@/components/motion/page-motion";
import {
  BookingFlow,
  BookingFlowSkeleton,
} from "@/components/booking/booking-flow";

export default function BookingPage() {
  return (
    <Suspense fallback={<BookingFlowSkeleton />}>
      <PageMotion className="page-flow">
        <BookingFlow />
      </PageMotion>
    </Suspense>
  );
}
