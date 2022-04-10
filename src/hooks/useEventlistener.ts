import { useEffect, useRef } from 'react';

export const useEventListener = (
  eventName: string,
  handler: EventListenerOrEventListenerObject,
  element = window
) => {
  const savedHandler = useRef<EventListenerOrEventListenerObject>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      const eventListener = (event: Event) => {
        if (savedHandler.current) {
          (savedHandler.current as EventListener)(event);
        }
      };
      element.addEventListener(eventName, eventListener);

      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
};
