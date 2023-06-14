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
    <h1 class="text-3xl font-bold mb-4 text-center">Sign Up</h1>
    <form on:submit={onSubmit} class="flex flex-col items-center">
      <input
        type="email"
        name="email"
        id="email"
        class="outline mb-4"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        class="outline mb-4"
        placeholder="Password"
        minlength="6"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        class="outline mb-4"
        placeholder="Confirm Password"
        minlength="6"
        required
      />
      {#if errorMessage}
        <p class="text-red-500 mb-4">{errorMessage}</p>
      {/if}
      <div class="flex justify-center">
        <button type="submit" class="bg-blue-800 text-white rounded p-3 w-20">
          Submit
        </button>
      </div>
    </form>
  </section>
</main>
