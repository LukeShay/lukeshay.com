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

  const repoColors = [
    {
      from: 'from-green-400',
      to: 'to-teal-500',
    },
    {
      from: 'from-cyan-400',
      to: 'to-blue-500',
    },
    {
      from: 'from-indigo-400',
      to: 'to-pink-500',
    },
    {
      from: 'from-green-400',
      to: 'to-teal-500',
    },
    {
      from: 'from-cyan-400',
      to: 'to-blue-500',
    },
    {
      from: 'from-indigo-400',
      to: 'to-pink-500',
    },
  ];

  export let repos;
</script>

<Container>
  <div class="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
    <h1 class="mb-4 text-3xl font-bold tracking-tight text-header md:text-5xl">
      Hey, I'm Luke Shay
    </h1>
    <p class="mb-16 prose text-body">
      I'm a developer that focuses on full stack development. I am employed at Hy-Vee as a Software
      Engineer II working on the Aisles Online platform.
    </p>
    <h3 class="mb-4 text-2xl font-bold tracking-tight text-header md:text-4xl">
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
        {#each repos as repo, i}
          <PinnedRepo from={repoColors[i].from} to={repoColors[i].to} {repo} />
        {/each}
      </div>
    {/if}
  </div>
</Container>
