<script>
  export let title = "Ala ma kota"
</script>

<div class="border border-stone-600 bg-stone-200 drop-shadow-md p-4">
  <h2>{title}</h2>

  <div class="text-sm">
    <slot />
  </div>
</div>