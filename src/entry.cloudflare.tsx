import { qwikCity } from '@builder.io/qwik-city/middleware/cloudflare-pages';

import entry from './entry.ssr';

const qwikCityMiddleware = qwikCity(entry);

export const onRequestGet = [qwikCityMiddleware];
