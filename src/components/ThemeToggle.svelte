<script>
  import { onMount } from 'svelte';
  import Moon from './icons/solid/Moon.svelte';
  import Sun from './icons/solid/Sun.svelte';

  const STORAGE_KEY = 'theme';
  const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

  const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
  };
  let currentTheme;

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

  const applyTheme = () => {
    const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;

    currentTheme = localStorage.getItem(STORAGE_KEY) || preferredTheme;

    if (currentTheme === THEMES.DARK) {
      document.body.classList.remove(THEMES.LIGHT);
      document.body.classList.add(THEMES.DARK);
    } else {
      document.body.classList.remove(THEMES.DARK);
      document.body.classList.add(THEMES.LIGHT);
    }
  };

  const toggleTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      // clear storage
      localStorage.removeItem(STORAGE_KEY);
    } else {
      // store opposite of preference
      localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
    }

    applyTheme();
  };

  onMount(() => {
    applyTheme();
    window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
  });
</script>

<button
  aria-label="Toggle Dark Mode"
  type="button"
  class="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
  on:click={toggleTheme}
>
  {#if currentTheme === THEMES.DARK}
    <Moon class="w-4 h-4 text-gray-800 dark:text-gray-200" />
  {:else}
    <Sun class="w-4 h-4 text-gray-800 dark:text-gray-200" />
  {/if}
</button>
