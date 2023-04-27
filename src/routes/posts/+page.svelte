<!-- @format -->
<script>
  import Post from "$lib/Post.svelte";
  import { page } from "$app/stores";

  export let data;
  const { posts } = data;
</script>
<h1 class="text-5xl text-center">Posts: {$page.data.cos}</h1>

<form method="POST" action="?/create" class="bg-indigo-500 p-8 w-3/5 mx-auto my-8 flex flex-col gap-4">
  <input class="py-1 px-2" placeholder="Tytuł…" />
  <textarea class="py-1 px-2" placeholder="Zajawka…" />
  <button class="bg-stone-500 text-white px-3 py-1 hover:bg-stone-700">Dodaj</button>
</form>

<div class="grid grid-cols-3 gap-8 w-4/5 mx-auto">
  {#each posts as post}
    <Post {...post} />
  {/each}
</div>
