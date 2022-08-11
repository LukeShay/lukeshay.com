import type { JSX } from '@builder.io/qwik/jsx-runtime';

type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

const ExternalLinkIcon = (props: IconProps): JSX.Element => (
  <svg
    fill="none"
    stroke-width={2}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="https://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const UserIcon = (props: IconProps): JSX.Element => (
  <svg
    fill="none"
    stroke-width={2}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="https://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const CodeIcon = (props: IconProps): JSX.Element => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke-width={2}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="https://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const ChatIcon = (props: IconProps): JSX.Element => (
  <svg
    fill="none"
    stroke-width={2}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="https://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const CakeIcon = (props: IconProps): JSX.Element => (
  <svg
    fill="none"
    stroke-width={2}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="https://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export type { IconProps };
export { ExternalLinkIcon, UserIcon, CodeIcon, ChatIcon, CakeIcon };
