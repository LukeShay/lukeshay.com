import Head from 'next/head';
import type { FC } from 'react';

type SeoProps = {
  title?: string;
  description?: string;
};

const Seo: FC<SeoProps> = ({ title = 'Luke Shay', description = 'Built using Next.js and TailwindCSS.' }) => (
  <Head>
    <title>{title}</title>
    <meta content={`Luke Shay's personal portfolio website. ${description}`} name="description" />
  </Head>
);

export type { SeoProps };
export { Seo };
