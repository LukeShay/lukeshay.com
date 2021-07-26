/**
 * @param {object} props
 * @param {React.ReactNode | undefined} props.children
 */
function Footer({ children }) {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      {children && <div className="flex flex-col justify-between">{children}</div>}
      <p className="mx-auto text-gray-500">&copy; 2021 Luke Shay</p>
    </footer>
  );
}

export default Footer;
