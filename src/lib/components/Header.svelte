<script>
  import { isLoggedIn } from "../../stores/authStore";
  import { onMount } from "svelte";

  let loggedIn;

  isLoggedIn.subscribe((value) => {
    loggedIn = value;
  });

  onMount(() => {
    console.log("isLoggedIn", loggedIn);
  });
</script>

<header
  class="p-4 flex flex-wrap justify-between text-xl mb-8 bg-blue-400 text-darkgray"
>
  <a href="/" class="font-extrabold">Home</a>
  <nav>
    <ul class="list-none flex m-0 gap-5 font-bold">
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        {#if loggedIn}
          <a href="/logout">
            <button class="pl-2 pr-2 bg-blue-800 rounded text-white"
              >Log Out</button
            >
          </a>
        {:else}
          <a href="/login">
            <button class="pl-2 pr-2 bg-blue-800 rounded text-white"
              >Log In</button
            >
          </a>
        {/if}
      </li>
    </ul>
  </nav>
</header>
