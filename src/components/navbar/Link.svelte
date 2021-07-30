<script>
  let clazz;

  export let href;
  export let target;
  export let rel;
  export { clazz as class };
</script>

<a {href} {target} {rel} class="{clazz} p-1 text-gray-900 sm:p-4 dark:text-gray-100"><slot /></a>
