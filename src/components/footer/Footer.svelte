<footer class="flex flex-col items-start justify-center w-full max-w-2xl mx-auto">
  <hr class="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
  {#if $$props.$$slots}
    <div class="flex flex-col justify-between"><slot /></div>
  {/if}
  <p class="mx-auto text-gray-500">&copy; 2021 Luke Shay</p>
</footer>
