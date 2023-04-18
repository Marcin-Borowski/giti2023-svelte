<!-- @format -->
<script>
  import { createEventDispatcher } from "svelte";

  let titleInput;
  let title = "";
  let abstract = "";

  const dispatch = createEventDispatcher();

  const onAddPost = () => {
    if (title && abstract) {
      dispatch("dodaj", {
        title,
        abstract,
      });

      title = "";
      abstract = "";
      titleInput.focus();
    }
  };

  const onGetPosts = () => {
    dispatch("pobierz");
  };
</script>

<div class="bg-indigo-500 p-8 w-3/5 mx-auto my-8 flex flex-col gap-4">
  <input bind:this={titleInput} bind:value={title} class="py-1 px-2" placeholder="Tytuł…" />
  <textarea bind:value={abstract} class="py-1 px-2" placeholder="Zajawka…" />
  <button on:click={onAddPost} class="bg-stone-500 text-white px-3 py-1 hover:bg-stone-700">Dodaj</button>
  <button on:click={onGetPosts} class="bg-stone-500 text-white px-3 py-1 hover:bg-stone-700">Pobierz</button>
</div>
