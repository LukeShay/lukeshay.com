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
  import Container from '../components/containers/Container.svelte';
  import GitHub from '../components/icons/companies/GitHub.svelte';
  import Go from '../components/icons/companies/Go.svelte';
  import GraphQL from '../components/icons/companies/GraphQL.svelte';
  import NodeJS from '../components/icons/companies/NodeJS.svelte';
  import PostgreSQL from '../components/icons/companies/PostgreSQL.svelte';
  import React from '../components/icons/companies/React.svelte';
  import Svelte from '../components/icons/companies/Svelte.svelte';
  import TailwindCSS from '../components/icons/companies/TailwindCSS.svelte';
  import PinnedRepo from '../components/PinnedRepo.svelte';
  import Technology from '../components/Technology.svelte';

  export let repos;
</script>

<Container>
  <div class="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
    <h1 class="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
      Hey, I'm Luke Shay
    </h1>
    <p class="mb-16 prose text-gray-600 dark:text-gray-400">
      I'm a developer that focuses on full stack development. I work at Rain & Hail Insurance as a
      Programmer on the Web Services team.
    </p>
    <h3 class="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
      My Most Used Technologies
    </h3>
    <div class="mb-16 grid gap-14 sm:gap-20 grid-cols-2 sm:grid-cols-4 my-2 w-full">
      <Technology><React /></Technology>
      <Technology><NodeJS /></Technology>
      <Technology><Svelte /></Technology>
      <Technology><Go /></Technology>
      <Technology><TailwindCSS /></Technology>
      <Technology><GraphQL /></Technology>
      <Technology><PostgreSQL /></Technology>
      <Technology><GitHub /></Technology>
    </div>
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
