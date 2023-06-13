<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { isLoggedIn } from "../stores/authStore";
  import "$lib/styles/styles.scss";
  import "../app.css";
  import app from "../firebase.js";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Welcome to NGFX");
        isLoggedIn.update(() => true);
      } else {
        isLoggedIn.update(() => false);
      }
    });
  });
</script>

<Header />
<main class="min-h-screen flex flex-col">
  <slot />
</main>
<Footer class="mt-auto" />
