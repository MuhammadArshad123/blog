<script>
  import app from "../../firebase.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { goto } from "$app/navigation";
  const auth = getAuth();

  let errorMessage = "";

  let isFormValid = true;

  function onSubmit(e) {
    errorMessage = "";
    e.preventDefault();

    isFormValid = true;

    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(data.email);
    if (!isEmailValid) {
      errorMessage = "Invalid email format";
      isFormValid = false;
    }

    if (data.password.length < 6) {
      errorMessage = "Password should be at least 6 characters long";
      isFormValid = false;
    }

    if (data.password !== data.confirmPassword) {
      errorMessage = "Passwords do not match";
      isFormValid = false;
    }

    if (isFormValid) {
      errorMessage = "";
      console.log(`Email is ${data.email}, password is ${data.password}`);
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          e.target.reset();
          goto("/");
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    }
  }
</script>

<main class="flex justify-center">
  <section class="max-w-3xl mx-auto">
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold mb-4">Sign Up</h1>
    </div>
    <form on:submit={onSubmit} class="">
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
          minlength="6"
          required
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          class="outline"
          placeholder="Confirm Password"
          minlength="6"
          required
        />
        {#if errorMessage}
          <p class="text-red-500">{errorMessage}</p>
        {/if}
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-blue-800 text-white outline-1 rounded p-3"
        >
          Submit
        </button>
      </div>
    </form>
  </section>
</main>
