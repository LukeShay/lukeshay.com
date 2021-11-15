<script>
  import GitHub from '../icons/companies/GitHub.svelte';
  import Linkedin from '../icons/companies/Linkedin.svelte';
</script>

<footer class="my-16 w-full max-w-2xl mx-auto">
  <hr class="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
  <div class="flex flex-row justify-between">
    <p class="text-body text-sm">&copy; Copyright 2021 Luke Shay</p>
    <div>
      <div class="text-body flex flex-row justify-between space-x-3">
        <a
          href="/github"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full hover:ring-brand p-1"
        >
          <GitHub class="w-6 h-6" />
        </a>
        <a
          href="/linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full hover:ring-brand p-1"
        >
          <Linkedin class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</footer>
