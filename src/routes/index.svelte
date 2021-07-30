<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch('/api/gh/pinned');

    if (res.ok) {
      return {
        props: {
          repos: await res.json(),
        },
      };
    }

    return {
      props: {},
    };
  }
</script>

<script>
  import PinnedRepo from '../components/PinnedRepo.svelte';
  import Container from '../components/containers/Container.svelte';

  export let repos;
</script>

<Container>
  <div class="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
    <h1 class="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
      Hey, I'm Luke Shay
    </h1>
    <h2 class="mb-16 prose text-gray-600 dark:text-gray-400">
      I'm a developer that focuses on full stack development. I work at Rain & Hail Insurance as a
      Programmer on the Web Services team. I am currently working on rewriting this website so most
      pages are incomplete.
    </h2>
    {#if repos}
      <h3 class="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Pinned Github Repositories
      </h3>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        {#each repos as repo}
          <PinnedRepo {repo} />
        {/each}
      </div>
    {/if}
  </div>
</Container>
