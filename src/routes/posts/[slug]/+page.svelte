<script>
  export let data;
  const {slug, title} = data;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

post: {slug}