import Footer from '@/components/Footer';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

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
        <div>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/resume">Resume</Navbar.Link>
        </div>
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
      </Navbar>
      <main id="skip" className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
      </main>
      <Footer>
        {/* <Footer.Group>
          <Footer.Link href="/">Home</Footer.Link>
          <Footer.Link href="/">About</Footer.Link>
          <Footer.Link href="/">Resume</Footer.Link>
        </Footer.Group>
        <Footer.Group>
          <Footer.ExternalLink href="https://github.com/lukeshay">GitHub</Footer.ExternalLink>
          <Footer.ExternalLink href="https://linkedin.com/in/luke-shay">
            Linkedin
          </Footer.ExternalLink>
          <Footer.ExternalLink href="	https://medium.com/@lukeshay">Medium</Footer.ExternalLink>
        </Footer.Group> */}
      </Footer>
    </div>
  );
}

export default Container;
