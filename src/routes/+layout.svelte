<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "$lib/styles/styles.scss";
  import "../app.css";
</script>

<Header />
<main class="min-h-screen flex flex-col">
  <slot />
</main>
<Footer class="mt-auto" />
