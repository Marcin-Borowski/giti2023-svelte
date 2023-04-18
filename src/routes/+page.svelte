<!-- @format -->
<script>
  import PostForm from "../lib/PostForm.svelte";
  import Post from "../lib/Post.svelte";

  let posts = [];

  const onAddPost = (e) => {
    const obj = e.detail;

    posts = [...posts, obj];
  };

  const onGetPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    posts = data.map(({ title, body }) => {
      return {
        title,
        abstract: body,
      };
    });
  };

  let count = 0;

  $: doubled = count * 2;
  $: quadrupled = doubled * 2;

  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 9;
  }

  function handleClick() {
    count += 1;
  }
</script>

<h1 class="text-5xl text-center my-4">Blog {doubled} - {quadrupled}</h1>

<button class="bg-red-500" on:click={handleClick}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<PostForm on:pobierz={onGetPosts} on:dodaj={onAddPost} />

<div class="grid grid-cols-3 gap-8 w-4/5 mx-auto my-8">
  {#each posts as { title, abstract }}
    <Post {title}>
      {@html abstract}
    </Post>
  {:else}
    <p>brak danych</p>
  {/each}
</div>
