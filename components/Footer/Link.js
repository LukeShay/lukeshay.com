import React from 'react';

/**
 * @param {object} props
 * @param {string} props.href
 * @param {React.ReactNode | undefined} props.children
 */
function Link({ href, children }) {
  return (
    <li>
      <Link href={href}>
        <a className="text-gray-500 transition hover:text-gray-600">{children}</a>
      </Link>
    </li>
  );
}

export default Link;
