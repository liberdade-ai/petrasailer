type UmamiEventData = Record<string, string>;

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data: UmamiEventData) => void;
    };
  }
}

export function trackUmamiEvent(eventName: string, data: UmamiEventData) {
  window.umami?.track(eventName, data);
}
