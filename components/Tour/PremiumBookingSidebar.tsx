
"use client";

import Link from "next/link";
import {
  CalendarCheck,
  ShieldCheck,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function PremiumBookingSidebar() {
  const message =
    "Hello Taj Wonder Heritage Tours! I am interested in booking one of your private tours. Please share the itinerary, availability and best price.";

  const whatsappLink = `https://wa.me/917830716981?text=${encodeURIComponent(
    message
  )}`;

  return (
    <aside className="sticky top-24">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-gray-900">
          Book This Tour
        </h2>

        <p className="mt-2 text-gray-600">
          Tailor-Made Private Tour
        </p>

        <p className="mt-3 text-sm text-gray-500">
          Every tour is customized according to your travel dates,
          group size and preferences.
        </p>

        {/* Tour Benefits */}

        <div className="mt-8 space-y-4 text-gray-800">

          <div className="flex items-center gap-3">
            <CalendarCheck className="h-5 w-5 text-green-600" />
            <span>Personalized Tour Planning</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Private Tour Experience</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Flexible Travel Arrangements</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Direct Assistance from Our Team</span>
          </div>

        </div>

        {/* Enquiry Buttons */}

        <div className="mt-8 space-y-3">

          <Link
            href="/contact"
            className="block w-full rounded-xl bg-orange-600 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
          >
            Get My Free Tour Quote
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire about a private tour on WhatsApp"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-600 py-3 font-semibold text-green-700 transition hover:bg-green-50"
          >
            <MessageCircle className="h-5 w-5" />
            Get Quote on WhatsApp
          </a>

        </div>

        {/* Direct Contact */}

        <div className="mt-8 border-t pt-6">

          <h3 className="font-semibold text-gray-900">
            Need Help?
          </h3>

          <div className="mt-4 space-y-4 text-sm">

            <a
              href="tel:+917830716981"
              className="flex items-center gap-3 text-gray-700 hover:text-orange-600"
            >
              <Phone className="h-4 w-4 text-orange-600" />
              +91 78307 16981
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-green-700"
            >
              <MessageCircle className="h-4 w-4 text-green-600" />
              Chat with us on WhatsApp
            </a>

            <a
              href="mailto:info@tajwonderheritagetours.com"
              className="flex items-center gap-3 text-gray-700 hover:text-orange-600"
            >
              <Mail className="h-4 w-4 text-orange-600" />
              info@tajwonderheritagetours.com
            </a>

          </div>

        </div>

        {/* Trust Section */}

        <div className="mt-8 rounded-xl bg-orange-50 p-4 text-center">

          <p className="font-semibold text-orange-700">
            Your Journey, Planned with Care
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Get personalized assistance, transparent tour details
            and direct communication with our local travel team.
          </p>

        </div>

      </div>
    </aside>
  );
}
