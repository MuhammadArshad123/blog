<script>
  export let data;
</script>

<div class="flex justify-center">
  <article class="mx-auto max-w-3xl">
    <h1 class="text-3xl font-extrabold">{data.title}</h1>
    <p class="italic">{data.date}</p>
    <svelte:component this={data.content} />
  </article>
</div>
