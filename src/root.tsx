import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet } from '@builder.io/qwik-city';

import './global.css';

import { Head } from '~/components/head';

export default component$(() => (
  <QwikCity>
    <Head />
    <body lang="en">
      <RouterOutlet />
    </body>
  </QwikCity>
));
