/**
 * Assign the project to an employee.
 * @param {Object} props
 * @param {React.ReactNode | undefined} props.title
 */
function Navbar({ children }) {
  return (
    <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      {children}
    </nav>
  );
}

export default Navbar;
