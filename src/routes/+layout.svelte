<script>
  import "../app.postcss";
  import { page } from '$app/stores';
</script>

<header class="bg-green-500 p-8">HEADER</header>

<slot />

{JSON.stringify($page.data.logos)}

<footer class="bg-orange-500 p-8">FOOTER</footer>