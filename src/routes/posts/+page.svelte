<!-- @format -->
<script>
  import Post from "$lib/Post.svelte";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";

  export let data;
  export let form;

  let posts = data.posts;

  const onDelete = async (event) => {
    const slug = event.detail;
    const response = await fetch("/api/posts", {
      method: "DELETE",
      body: JSON.stringify({ slug }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json()

    posts = result.posts;
  };
</script>

<h1 class="text-5xl text-center">Posts: {$page.data.cos}</h1>

{#if form?.status}
  ZAPISANE
{:else}
  brak
{/if}

<form method="POST" action="?/create" class="bg-indigo-500 p-8 w-3/5 mx-auto my-8 flex flex-col gap-4">
  <input name="title" class="py-1 px-2" placeholder="Tytuł…" />
  <textarea name="abstract" class="py-1 px-2" placeholder="Zajawka…" />
  <button class="bg-stone-500 text-white px-3 py-1 hover:bg-stone-700">Dodaj</button>
</form>

<div class="grid grid-cols-3 gap-8 w-4/5 mx-auto">
  {#each posts as post}
    <Post {...post} on:delete={onDelete} />
  {/each}
</div>
