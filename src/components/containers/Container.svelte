<script>
  import Navbar from '../navbar/Navbar.svelte';
  import Link from '../navbar/Link.svelte';
  import Footer from '../footer/Footer.svelte';

  export let title = 'Luke Shay';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Navbar>
  <div>
    <Link href="/">Home</Link>
    <Link href="/resume">Resume</Link>
  </div>
  <button
    aria-label="Toggle Dark Mode"
    type="button"
    class="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
  >
    T
  </button>
</Navbar>
<main id="skip" class="flex flex-col justify-center px-8 bg-white dark:bg-black">
  <slot />
</main>
<Footer />
