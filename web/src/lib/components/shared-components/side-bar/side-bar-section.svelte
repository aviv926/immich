<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<section
  id="sidebar"
  tabindex="-1"
  class="immich-scrollbar group relative z-10 flex w-18 flex-col gap-1 overflow-y-auto bg-immich-bg pt-8 max-md:pt-16 transition-all duration-200 dark:bg-immich-dark-bg hover:sm:w-64 hover:sm:border-r hover:sm:pr-6 hover:sm:shadow-2xl hover:sm:dark:border-r-immich-dark-gray md:w-64 md:pr-6 hover:md:border-none hover:md:shadow-none"
>
  {@render children?.()}
</section>
