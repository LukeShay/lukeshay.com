<script>
  import ExternalLink from './icons/solid/ExternalLink.svelte';

  export let repo;
  export let from = 'from-green-300';
  export let to = 'to-teal-600';
</script>

<a
  href="https://github.com/{repo.nameWithOwner}"
  target="_blank"
  rel="noopener noreferrer"
  class="bg-white dark:bg-black p-1 {from} {to} hover:bg-gradient-to-r hover:shadow-lg ransition-shadow transition-transform duration-300 ease-in-out hover:scale-105 rounded-md"
>
  <div class="w-full bg-white dark:bg-black p-3 rounded min-h-[120px]">
    <div class="text-black dark:text-white flex items-center font-semibold text-lg">
      {repo.nameWithOwner}<ExternalLink class="h-5 w-5 ml-2" />
    </div>
    <p class="text-body mt-2 text-sm">{repo.description || ''}&nbsp;</p>
  </div>
</a>
