<script>
  import ExternalLink from './icons/solid/ExternalLink.svelte';

  export let repo;
</script>

<a href="https://github.com/{repo.nameWithOwner}" target="_blank" rel="noopener noreferrer">
  <div class="w-full hover:ring-4 ring-teal-400 hover:shadow-lg transition duration-300 ease-in-out p-4 rounded min-h-[120px]">
    <div class="text-black dark:text-white flex items-center font-semibold text-lg">
      {repo.nameWithOwner}<ExternalLink class="h-5 w-5 ml-2" />
    </div>
    <p class="text-gray-600 dark:text-gray-400 mt-2">{repo.description || ''}&nbsp;</p>
  </div>
</a>
