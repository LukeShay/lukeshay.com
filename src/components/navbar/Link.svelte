<script>
  let clazz = '';

  export let href;
  export let target = '';
  export let rel = '';
  export { clazz as class };
</script>

<a
  {href}
  {target}
  {rel}
  class="{clazz} text-gray-900 p-2 dark:text-gray-100 hover:ring ring-teal-400 rounded transition ease-in-out duration-300"
>
  <slot />
</a>
