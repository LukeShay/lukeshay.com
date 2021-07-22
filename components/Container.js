import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

/**
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string | undefined} props.title
 * @returns
 */
function Container({ children, title }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{title || 'Luke Shay'}</title>
      </Head>
      <Navbar>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted &&
            (resolvedTheme === 'dark' ? (
              <SunIcon className="w-4 h-4 text-gray-200" />
            ) : (
              <MoonIcon className="w-4 h-4 text-gray-800" />
            ))}
        </button>
        <div>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/resume">Resume</Navbar.Link>
        </div>
      </Navbar>
      <main id="skip" className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
      </main>
    </div>
  );
}

export default Container;
