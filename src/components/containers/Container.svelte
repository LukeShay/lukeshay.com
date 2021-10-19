<script>
  import Navbar from '../navbar/Navbar.svelte';
  import Link from '../navbar/Link.svelte';
  import Footer from '../footer/Footer.svelte';
  import ThemeToggle from '../ThemeToggle.svelte';

  export let title = 'Luke Shay';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Navbar>
  <div class="space-x-2">
    <Link href="/">Home</Link>
    <Link href="/resume-2021-10.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
  </div>
  <ThemeToggle />
</Navbar>
<main id="skip" class="flex flex-col justify-center px-8 bg-white dark:bg-black">
  <slot />
</main>
<Footer />
