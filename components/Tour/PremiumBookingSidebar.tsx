"use client";

import Link from "next/link";
import { CalendarCheck, ShieldCheck, Phone, MessageCircle } from "lucide-react";

export default function PremiumBookingSidebar() {
  return (
    <aside className="sticky top-24">

      <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-6">

        {/* Title */}

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

        {/* Features */}

        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-3">
            <CalendarCheck className="h-5 w-5 text-green-600" />
            <span>Instant Confirmation</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Free Cancellation</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Private Tour</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>Reserve Now & Pay Later</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span>24/7 Customer Support</span>
          </div>

        </div>

        {/* Buttons */}

        <div className="mt-8 space-y-3">

          <Link
            href="/contact"
            className="block w-full rounded-xl bg-orange-600 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
          >
            Get Free Quote
          </Link>

          <a
            href="https://wa.me/917830716981"
            target="_blank"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-600 py-3 font-semibold text-green-700 transition hover:bg-green-50"
          >
            <MessageCircle className="h-5 w-5" />
            Get Quote on WhatsApp
          </a>

        </div>

        {/* Contact */}

        <div className="mt-8 border-t pt-6">

          <h3 className="font-semibold text-gray-900">
            Need Help?
          </h3>

          <div className="mt-4 space-y-3 text-sm">

            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-orange-600" />
              <span>+91 78307 16981</span>
            </div>

            <div className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-green-600" />
              <span>Available on WhatsApp</span>
            </div>

            <div>
              <span className="font-medium">
                Email:
              </span>
              <br />
              info@tajwonderheritagetour.com
            </div>

          </div>

        </div>

        {/* Trust */}

        <div className="mt-8 rounded-xl bg-orange-50 p-4 text-center">

          <p className="font-semibold text-orange-700">
            ⭐ Trusted by 500+ Happy Travelers
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Personalized service with excellent reviews from guests worldwide.
          </p>

        </div>

      </div>

    </aside>
  );
}