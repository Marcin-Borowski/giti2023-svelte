<!-- @format -->
<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let title = "Ala ma kota";
  export let slug;

  const dispatch = createEventDispatcher();

  const onDelete = () =>{
    dispatch('delete', slug)
  }

  onMount(async () => {

  })
</script>
<div class="border border-stone-600 bg-stone-200 drop-shadow-md p-4">
  <a href={`/posts/${slug}/`} class="">
    <h2>{title} {slug}</h2>

    <div class="text-sm">
      <slot>
        <div>brak abstractu</div>
      </slot>
    </div>

    <div class="bg-red-500">
      <slot name="tags"></slot>
    </div>
  </a>

  <button on:click={onDelete} class="flex space-x-2 border border-stone-500 px-3 py-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg> Usuń
  </button>
</div>
