<script>
  import app from "../../firebase.js";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { goto } from "$app/navigation";
  const auth = getAuth();
  let errorMessage = "";
  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    console.log(`Email is ${data.email}, password is ${data.password}`);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        errorMessage = "";
        const user = userCredential.user;
        e.target.reset();
        goto("/");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          errorMessage = "User account not found.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password.";
        } else {
          errorMessage = "An error occurred. Please try again.";
        }
      });
  }
</script>

<main class="flex justify-center">
  <section class="max-w-3xl mx-auto">
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold mb-4">Log In</h1>
    </div>
    <form on:submit={onSubmit} class="flex-col justify-center">
      <div class="mb-4">
        <input
          type="email"
          name="email"
          id="email"
          class="outline"
          placeholder="Email"
          required
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          name="password"
          id="password"
          class="outline"
          placeholder="Password"
        />
      </div>
      {#if errorMessage}
        <!-- Display error message if it is not empty -->
        <div class="text-red-500 mb-4">{errorMessage}</div>
      {/if}
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-blue-800 text-white outline-1 rounded p-3"
        >
          Submit
        </button>
      </div>
    </form>

    <div class="mt-10">
      <p class="inline">Or, if need to create an account,</p>
      <a href="/signup">
        <button class="bg-blue-800 text-white outline-1 rounded p-3 inline">
          Sign Up
        </button>
      </a>
    </div>
  </section>
</main>
