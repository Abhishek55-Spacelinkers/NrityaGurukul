"use client";

import { Details } from "@/lib/data";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900/80 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-6">Last updated: [08 September 2025]</p>

        {/* Intro */}
        <p className="mb-6">
          At <span className="font-semibold">Nritya Gurukul</span> (“we,” “our,”
          or “us”), your privacy is important to us. This Privacy Policy
          explains how we collect, use, and safeguard your personal information
          when you visit or interact with our website{" "}
          <a
            href="https://www.nrityagurukul.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            https://www.nrityagurukul.in
          </a>
          . By using our Website, you agree to the terms of this Privacy Policy.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Contact Information:</span> Name,
            email address, phone number.
          </li>
          <li>
            <span className="font-semibold">Booking Details:</span> Selected
            class/stage/age group and other related information you provide in
            booking forms.
          </li>
          <li>
            <span className="font-semibold">Payment Information:</span> We do not
            directly collect or store card/bank details. Payments are made via QR
            code scanning through third-party providers.
          </li>
        </ul>

        {/* 2. How We Collect Information */}
        <h2 className="text-xl font-semibold mb-2">
          2. How We Collect Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Through forms you submit on our Website.</li>
          <li>Through email communications if you contact us.</li>
          <li>
            Automatically, via cookies or similar technologies (basic website
            analytics only).
          </li>
        </ul>

        {/* 3. How We Use Your Information */}
        <h2 className="text-xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Processing your class booking and service requests.</li>
          <li>Responding to your inquiries and communications.</li>
          <li>Sending you updates related to your bookings or services.</li>
          <li>Improving our Website and offerings.</li>
        </ul>

        {/* 4. Sharing of Information */}
        <h2 className="text-xl font-semibold mb-2">4. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell, rent, or trade your personal information. Your
          information may only be shared in the following cases:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Service Providers:</span> With trusted
            partners assisting in operating the Website or delivering services.
          </li>
          <li>
            <span className="font-semibold">Legal Requirements:</span> If required
            by law, regulation, or government authority.
          </li>
        </ul>

        {/* 5. Data Retention */}
        <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
        <p className="mb-6">
          We retain your personal information only as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, or as required by law.
        </p>

        {/* 6. Security of Your Information */}
        <h2 className="text-xl font-semibold mb-2">6. Security of Your Information</h2>
        <p className="mb-6">
          We take reasonable measures to protect your information from
          unauthorized access, misuse, or disclosure. However, no internet
          transmission or storage system is completely secure, and we cannot
          guarantee absolute security.
        </p>

        {/* 7. Cookies */}
        <h2 className="text-xl font-semibold mb-2">
          7. Cookies & Tracking Technologies
        </h2>
        <p className="mb-6">
          Our Website may use cookies or similar technologies to improve user
          experience and analyze Website performance. You can manage or disable
          cookies in your browser settings.
        </p>

        {/* 8. Children’s Privacy */}
        <h2 className="text-xl font-semibold mb-2">8. Children’s Privacy</h2>
        <p className="mb-6">
          Our Website and services are intended for individuals above the age of
          18 or under the supervision of a parent/guardian. We do not knowingly
          collect personal information from children without parental consent.
        </p>

        {/* 9. Your Rights */}
        <h2 className="text-xl font-semibold mb-2">9. Your Rights</h2>
        <p className="mb-2">You may request to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access, correct, or update your personal information.</li>
          <li>
            Request deletion of your personal information, subject to legal or
            contractual obligations.
          </li>
          <li>Opt out of receiving communications from us.</li>
        </ul>
        <p className="mb-6">
          To exercise these rights, please contact us using the details below.
        </p>

        {/* 10. Changes to this Privacy Policy */}
        <h2 className="text-xl font-semibold mb-2">
          10. Changes to this Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated “Last updated” date.
        </p>

        {/* 11. Contact Us */}
        <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
        <p className="mb-2">
          If you have any questions about this Privacy Policy or how we handle
          your data, you can reach us at:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="flex">
              Email:
              <a href="mailto:info@spacelinkers.com">
                <p className="opacity-90 pl-1">{Details.email}</p>
              </a>
            </span>
          </li>
          <li>
            <span className="flex">
              Phone:
              <a href={`tel:${Details.cphone}`}>
                <p className="opacity-90 pl-1">{Details.phone}</p>
              </a>
            </span>
          </li>
          <li>
            Website Contact Page:
            <Link href="/contact" className="pl-1 text-blue-400 underline">
              Click here
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
