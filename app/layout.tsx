import type { Metadata } from "next";
import Script from "next/script";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    images: [{ url: "/og-image.webp" }],
  },
};

const kiwifyUtmTrackingScript = `
  (function () {
    var checkoutPrefixes = ["https://pay.kiwify.com.br"];
    var utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content"
    ];

    function getCurrentSearchParams() {
      try {
        return new URL(window.top.location.href).searchParams;
      } catch (error) {
        return new URL(window.location.href).searchParams;
      }
    }

    function getSckValue(sourceParams) {
      var values = utmKeys.map(function (key) {
        return sourceParams.get(key) || "";
      });

      return values.some(Boolean) ? values.join("|") : "";
    }

    function shouldTrack(url) {
      return checkoutPrefixes.some(function (prefix) {
        return url.href.indexOf(prefix) === 0;
      });
    }

    function addTrackingParams(url) {
      var sourceParams = getCurrentSearchParams();

      if (!sourceParams.toString()) {
        return url;
      }

      var targetParams = new URLSearchParams(url.search);
      var sckValue = getSckValue(sourceParams);

      sourceParams.forEach(function (value, key) {
        if (!targetParams.has(key)) {
          targetParams.set(key, value);
        }
      });

      if (sckValue && !targetParams.has("sck")) {
        targetParams.set("sck", sckValue);
      }

      url.search = targetParams.toString();

      return url;
    }

    function applyTrackingParams() {
      document.querySelectorAll("a[href]").forEach(function (anchor) {
        var url;

        try {
          url = new URL(anchor.href);
        } catch (error) {
          return;
        }

        if (!shouldTrack(url)) {
          return;
        }

        url = addTrackingParams(url);

        if (anchor.href !== url.toString()) {
          anchor.href = url.toString();
        }
      });
    }

    var scheduled = false;

    function scheduleApplyTrackingParams() {
      if (scheduled) {
        return;
      }

      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        applyTrackingParams();
      });
    }

    function getCheckoutAnchor(target) {
      var element =
        target && target.nodeType === 1 ? target : target && target.parentElement;

      while (element && element !== document.documentElement) {
        if (element.tagName === "A" && element.href) {
          try {
            if (shouldTrack(new URL(element.href))) {
              return element;
            }
          } catch (error) {
            return null;
          }
        }

        element = element.parentElement;
      }

      return null;
    }

    function trackCheckoutClick(anchor) {
      var eventName = anchor.getAttribute("data-checkout-event") || "checkout_cta_click";

      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, {});
      }

      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: eventName });
      }
    }

    function openCheckout(anchor, url) {
      var href = url.toString();
      var target = anchor.getAttribute("target") || "_self";

      if (target === "_self") {
        window.location.href = href;
        return;
      }

      var opened = window.open(href, target);

      if (!opened && target !== "_blank") {
        window.location.href = href;
        return;
      }

      if (opened && target === "_blank") {
        opened.opener = null;
      }
    }

    ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"].forEach(
      function (eventName) {
        window.addEventListener(
          eventName,
          function (event) {
            if (getCheckoutAnchor(event.target)) {
              event.stopImmediatePropagation();
            }
          },
          true
        );
      }
    );

    window.addEventListener(
      "click",
      function (event) {
        var anchor = getCheckoutAnchor(event.target);

        if (!anchor) {
          return;
        }

        var url;

        try {
          url = addTrackingParams(new URL(anchor.href));
        } catch (error) {
          return;
        }

        anchor.href = url.toString();
        trackCheckoutClick(anchor);
        event.preventDefault();
        event.stopImmediatePropagation();
        openCheckout(anchor, url);
      },
      true
    );

    applyTrackingParams();

    new MutationObserver(scheduleApplyTrackingParams).observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    window.addEventListener("pageshow", applyTrackingParams);

    console.log("%cScript de rastreamento de vendas", "font-size:20px;color:yellow;");
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);',
          }}
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/ab98406f-b96d-4059-a1b9-abd513177fe5/players/69f8c100d80c2e54d8dfaee5/v4/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
          as="script"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </head>
      <body style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2092514221328491');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2092514221328491&ev=PageView&noscript=1" alt="" />',
          }}
        />
        {children}
        <Script
          id="kiwify-utm-tracking"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: kiwifyUtmTrackingScript,
          }}
        />
      </body>
    </html>
  );
}
