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

{#if userEmail}
  <p>User email: {userEmail}</p>
{:else}
  <p>No user is logged in</p>
{/if}
<button on:click={logOut}>Log Out</button>
