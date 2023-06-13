<script>
  function onSubmit(e) {
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data);
  }
</script>

<main class="flex justify-center">
  <section class="max-w-3xl mx-auto">
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold mb-4">Log In</h1>
    </div>
    <form on:submit|preventDefault={onSubmit} action="">
      <div class="mb-4">
        <input
          type="text"
          name="email"
          id="email"
          class="outline"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <input
          type="text"
          name="password"
          id="password"
          class="outline"
          placeholder="Password"
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-blue-800 text-white outline-1 rounded p-3">Submit</button
        >
      </div>
    </form>
  </section>
</main>
