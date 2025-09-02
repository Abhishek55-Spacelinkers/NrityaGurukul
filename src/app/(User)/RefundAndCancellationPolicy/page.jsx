"use client";

import { Details } from "@/lib/data";
import Link from "next/link";

export default function RefundAndCancellationPolicy() {
  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900/80 mb-2">
          Refund & Cancellation Policy
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Last updated: [08 September 2025]
        </p>

        {/* Intro */}
        <p className="mb-6">
          At <span className="font-semibold">Nritya Gurukul</span>, we value your trust and aim to
          provide the best learning experience. This Refund & Cancellation Policy
          outlines the terms related to booking cancellations, rescheduling, and
          refunds for our services.
        </p>

        {/* Class Bookings & Payments */}
        <h2 className="text-xl font-semibold mb-2">1. Class Bookings & Payments</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            All bookings for dance classes and related services are confirmed
            only after full payment is made via QR code.
          </li>
          <li>Once a booking is confirmed, it is non-transferable to another person.</li>
        </ul>

        {/* Cancellation by Students */}
        <h2 className="text-xl font-semibold mb-2">2. Cancellation by Students</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Fees once paid are non-refundable, except in special circumstances outlined below.</li>
          <li>
            If you wish to cancel your booking, you must inform us at least{" "}
            <span className="font-semibold">7 days before</span> the class/session start date.
            In such cases, we may allow rescheduling to another available batch
            or session (subject to management approval).
          </li>
          <li>No refunds will be issued for cancellations made after the class/session has started.</li>
        </ul>

        {/* Rescheduling Policy */}
        <h2 className="text-xl font-semibold mb-2">3. Rescheduling Policy</h2>
        <p className="mb-6">
          In case you are unable to attend a booked class/session, you may request to
          reschedule by contacting us in advance. Rescheduling is subject to availability
          of batches and approval from Nritya Gurukul management.
        </p>

        {/* Cancellation by Nritya Gurukul */}
        <h2 className="text-xl font-semibold mb-2">4. Cancellation by Nritya Gurukul</h2>
        <p className="mb-4">
          In the unlikely event that we cancel or reschedule a class/session due to
          unforeseen circumstances (e.g., instructor unavailability, insufficient
          enrollments, or force majeure events), students will be:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Offered an alternative date/batch, OR</li>
          <li>
            Provided a full refund of the paid fees, if rescheduling is not possible.
          </li>
        </ul>

        {/* No-Show Policy */}
        <h2 className="text-xl font-semibold mb-2">5. No-Show Policy</h2>
        <p className="mb-6">
          If a student does not attend the booked class/session without prior
          notice, the booking amount will be forfeited, and no refund will be issued.
        </p>

        {/* Refund Timelines */}
        <h2 className="text-xl font-semibold mb-2">6. Refund Timelines</h2>
        <p className="mb-6">
          Approved refunds (if applicable) will be processed within{" "}
          <span className="font-semibold">7–10 business days</span>. Refunds will
          be made to the original payment method used at the time of booking.
        </p>

        {/* Contact for Refund & Cancellation */}
        <h2 className="text-xl font-semibold mb-2">7. Contact for Refund & Cancellation</h2>
        <p className="mb-2">For any queries or requests related to cancellations and refunds, please contact us at:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="flex">
              Email:{" "}
              <a href="mailto:info@spacelinkers.com">
                <p className="opacity-90 pl-1">{Details.email}</p>
              </a>
            </span>
          </li>
          <li>
            <span className="flex">
              Phone:
              <a href={`tel:${Details.cphone}`}>
                <p className="opacity-90 pl-1"> {Details.phone}</p>
              </a>
            </span>
          </li>

          <li>
            Contact us:
            <Link
              href="/contact"
              className="pl-1 text-blue-400 underline"
            >   
                Click here
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
