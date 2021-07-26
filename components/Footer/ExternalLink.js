import React from 'react';

/**
 * @param {object} props
 * @param {string} props.href
 * @param {React.ReactNode | undefined} props.children
 */
function ExternalLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-500 transition hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </li>
  );
}

export default ExternalLink;
