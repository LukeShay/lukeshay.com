<script>
  import '../styles/app.postcss';
  import { onMount } from 'svelte'
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import * as Fathom from 'fathom-client'

  onMount(() => {
    Fathom.load('ZHFMSQAA', {
      // optional - add your website domain(s) to avoid views during development
      includedDomains: ['lukeshay.com', 'www.lukeshay.com'],
    })
  })

  // track a page view when the URL path changes
  $: $page.path, browser && Fathom.trackPageview()
</script>

<slot />
