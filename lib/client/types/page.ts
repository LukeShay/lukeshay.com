import type { NextPage } from 'next';

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  title?: string;
  description?: string;
};

export type { Page };
