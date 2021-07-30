<script>
  import Navbar from '../navbar/Navbar.svelte';
  import Link from '../navbar/Link.svelte';
  import Footer from '../footer/Footer.svelte';
  import Moon from '../icons/solid/Moon.svelte';
  import ThemeToggle from '../ThemeToggle.svelte';

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
  <ThemeToggle />
</Navbar>
<main id="skip" class="flex flex-col justify-center px-8 bg-white dark:bg-black">
  <slot />
</main>
<Footer />
