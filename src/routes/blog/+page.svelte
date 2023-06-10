<script>
  export let data;
</script>

<div class="flex justify-center">
  <section class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold">My Blog</h1>

    <ul>
      {#each data.posts as post}
        <li class="mt-3">
          <h2 class="text-xl font-bold">
            <a href={post.path}>
              {post.meta.title}
            </a>
          </h2>
          <p class="italic">Published {post.meta.date}</p>
          <p>
            {post.meta.description}
          </p>
        </li>
      {/each}
    </ul>
  </section>
</div>
