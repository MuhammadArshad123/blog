<script>
  import app from "../../firebase.js";
  import { getAuth } from "firebase/auth";
  import { goto } from "$app/navigation";
  const auth = getAuth();
  let userEmail = null; // Variable to store the user's email

  // Retrieve the user's email
  if (auth.currentUser) {
    userEmail = auth.currentUser.email;
  }
  function logOut() {
    auth.signOut().then(
      function () {
        console.log("Sign out successful");
        goto("/");
      },
      function (error) {
        console.log(error);
      }
    );
  }
</script>

<main class="flex justify-center">
  <section class="max-w-3xl mx-auto">
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold">Log Out</h1>
    </div>
    {#if userEmail}
      <p>User email: {userEmail}</p>
    {:else}
      <p>No user is logged in</p>
    {/if}
    <button
      class="bg-blue-800 text-white outline-1 rounded p-3"
      on:click={logOut}>Log Out</button
    >
  </section>
</main>
