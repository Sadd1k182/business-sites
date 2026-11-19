import type { SVGProps } from 'react';

export function ViberIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Viber squircle speech bubble outline */}
      <path
        d="M12 2.5C6.5 2.5 3 5.6 3 10.8c0 2.6 1.1 4.8 3 6.2v3.7c0 .5.6.8 1 .5l2.8-2.1c.7.1 1.5.2 2.2.2 5.5 0 9-3.1 9-8.5S17.5 2.5 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Phone handset inside bubble */}
      <path
        d="M14.7 13.4c-.3 0-.7-.2-1.1-.4-.3-.1-.6 0-.8.2l-.4.5c-.2.2-.5.2-.8.1-1-.5-1.9-1.3-2.4-2.4-.1-.3-.1-.6.1-.8l.5-.4c.2-.2.3-.5.2-.8-.2-.4-.4-.8-.4-1.1 0-.4-.3-.7-.7-.7h-.8c-.4 0-.8.3-.8.8 0 3.2 2.6 5.9 5.8 6.4.5.1.9-.3.9-.7v-.7c0-.4-.3-.7-.7-.7Z"
        fill="currentColor"
      />
      {/* Signal waves */}
      <path
        d="M13.2 7.6c1.4.2 2.5 1.3 2.7 2.7M13.4 5.6c2.4.3 4.2 2.1 4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* WhatsApp circular speech bubble */}
      <path
        d="M12 3a8.9 8.9 0 0 0-7.7 13.3L3 21l4.8-1.3A8.9 8.9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handset */}
      <path
        d="M15.6 13.8c-.3-.2-1.1-.6-1.3-.6-.2-.1-.4-.1-.5.1-.2.2-.5.6-.6.7-.1.2-.3.2-.5.1-1-.4-1.8-1.1-2.4-2-.2-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1.1 2.6c.1.2 1.8 2.8 4.4 3.8 1.6.6 2.2.5 2.6.4.5-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.6-.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Classic Telegram paper plane */}
      <path
        d="M21.2 4.4 2.9 11.5c-.8.3-.8 1.4 0 1.7l4.6 1.5 1.8 5.4c.2.7 1.1.9 1.6.4l2.6-2.5 4.8 3.5c.6.4 1.5.1 1.7-.7l2.5-15c.2-.9-.6-1.7-1.3-1.4ZM9.3 14.3l8.2-6.8c.2-.2.4.1.2.3l-6.8 7.8-.3 3.2-1.3-4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
