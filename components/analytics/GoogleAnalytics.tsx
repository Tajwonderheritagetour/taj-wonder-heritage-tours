
"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackGAEvent } from "@/lib/analytics";

const GA_MEASUREMENT_ID = "G-2VGZKSH3LR";

export default function GoogleAnalytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const link = target.closest("a");

      if (!(link instanceof HTMLAnchorElement)) return;

      const url = new URL(link.href);

      if (url.protocol === "tel:") {
        trackGAEvent("phone_click", {
          page_path: window.location.pathname,
        });
        return;
      }

      const whatsappHosts = [
        "wa.me",
        "api.whatsapp.com",
        "web.whatsapp.com",
      ];

      if (whatsappHosts.includes(url.hostname)) {
        trackGAEvent("whatsapp_click", {
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
