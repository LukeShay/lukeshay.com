import NextLink from 'next/link';

/**
 *
 * @param {Object} props
 * @param {string} props.href
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 */
function Link({ href, children, className }) {
  return (
    <NextLink href={href}>
      <a className={`${className} p-1 text-gray-900 sm:p-4 dark:text-gray-100`}>{children}</a>
    </NextLink>
  );
}

export default Link;
