
declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters: Record<string, string>
    ) => void;
  }
}

export function trackGAEvent(
  eventName: string,
  parameters: Record<string, string>
) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, parameters);
}
