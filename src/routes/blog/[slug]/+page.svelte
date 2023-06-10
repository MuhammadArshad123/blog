<script>
  export let data;
</script>

<article>
  <h1 class="text-3xl font-extrabold">{data.title}</h1>
  <p class="italic">{data.date}</p>

  <svelte:component this={data.content} />
</article>
