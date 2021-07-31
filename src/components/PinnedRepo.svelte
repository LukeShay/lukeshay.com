<script>
  import ExternalLink from './icons/solid/ExternalLink.svelte';

  export let repo;
</script>

<div class="w-full border-gray-200 dark:border-gray-800 p-4 border rounded h-[120px]">
  <a href="https://github.com/{repo.nameWithOwner}" target="_blank" rel="noopener noreferrer">
    <div class="text-black dark:text-white flex items-center font-semibold text-lg">
      {repo.nameWithOwner}<ExternalLink class="h-5 w-5 ml-2" />
    </div>
  </a>
  <p class="text-gray-600 dark:text-gray-400 mt-2">{repo.description || ''}&nbsp;</p>
</div>
