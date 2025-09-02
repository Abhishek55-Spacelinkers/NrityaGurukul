"use client";

import { Details } from "@/lib/data";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900/80 mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-6">Last updated: [08 September 2025]</p>

        {/* Intro */}
        <p className="mb-6">
          Welcome to <span className="font-semibold">Nritya Gurukul</span>{" "}
          (“we,” “our,” or “us”). These Terms & Conditions (“Terms”) govern your
          use of our website{" "}
          <a
            href="https://www.nrityagurukul.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            https://www.nrityagurukul.in
          </a>{" "}
          (the “Website”) and the services offered through it. By accessing or
          using our Website, you agree to comply with these Terms. If you do not
          agree, please discontinue use immediately.
        </p>

        {/* Eligibility */}
        <h2 className="text-xl font-semibold mb-2">1. Eligibility</h2>
        <p className="mb-6">
          By using our Website, you confirm that you are at least 18 years of
          age, or accessing the Website under the supervision of a parent or
          legal guardian.
        </p>

        {/* Services */}
        <h2 className="text-xl font-semibold mb-2">2. Services</h2>
        <p className="mb-6">
          We provide dance-related services, programs, and offerings which can
          be purchased through our Website. Payments for services are accepted
          via <span className="font-semibold">QR code scanner</span> as
          instructed during checkout.
        </p>

        {/* Payments & Refund */}
        <h2 className="text-xl font-semibold mb-2">
          3. Payments & Refund Policy
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            All payments must be made in full before availing of services.
          </li>
          <li>
            Payments made via QR code are final and non-refundable, unless
            otherwise required by applicable law.
          </li>
          <li>
            We reserve the right to cancel or refuse any service order in case
            of suspected fraud or unauthorized activity.
          </li>
        </ul>

        {/* Intellectual Property */}
        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p className="mb-6">
          All content available on the Website, including but not limited to our
          logo, design, text, images, graphics, videos, and trademarks, are the
          exclusive property of{" "}
          <span className="font-semibold">Nritya Gurukul</span>. Unauthorized
          use, reproduction, distribution, or modification of our content is
          strictly prohibited.
        </p>

        {/* User Responsibilities */}
        <h2 className="text-xl font-semibold mb-2">5. User Responsibilities</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>You agree to use our Website only for lawful purposes.</li>
          <li>
            You shall not attempt to disrupt, damage, or interfere with the
            functioning of our Website.
          </li>
          <li>
            Users are not permitted to create accounts, upload content, or post
            on the Website.
          </li>
        </ul>

        {/* Feedback */}
        <h2 className="text-xl font-semibold mb-2">
          6. Feedback & Suggestions
        </h2>
        <p className="mb-6">
          If you choose to provide feedback or suggestions regarding our Website
          or services, you agree that we may use such feedback without any
          obligation to provide compensation or acknowledgment.
        </p>

        {/* Limitation of Liability */}
        <h2 className="text-xl font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <p className="mb-6">
          To the fullest extent permitted by law,{" "}
          <span className="font-semibold">Nritya Gurukul</span> shall not be
          held liable for any damages, losses, or expenses resulting from your
          use of our Website or services, including but not limited to indirect
          or incidental damages.
        </p>

        {/* Governing Law */}
        <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by and construed under the laws of India,
          specifically the State of Uttar Pradesh, without regard to conflict of
          law principles.
        </p>

        {/* Changes to Terms */}
        <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
        <p className="mb-6">
          We may update or modify these Terms at any time. Changes will be
          effective immediately upon posting on this page. Your continued use of
          our Website after changes indicates acceptance of the updated Terms.
        </p>

        {/* Contact Us */}
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p className="mb-2">
          If you have any questions about these Terms, you can contact us by:
        </p>
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
