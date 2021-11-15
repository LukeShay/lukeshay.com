import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  kit: {
    target: '#svelte',
    adapter: vercel(),
    vite: {
      server: {
        hmr: {
          port: 3000,
        },
      },
    },
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
