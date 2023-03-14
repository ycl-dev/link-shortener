<script>
  export let form

  let showModal
</script>

<h1>Login</h1>
<form method="post" action="?/login">
  <input type="email" name="email" placeholder="Email" required />
  <input type="password" name="password" placeholder="Password" required />
  <small>
    <a on:click={() => (showModal = true)}>Forgot Password?</a>
  </small>
  {#if form?.error}
    <center style="color: crimson; margin:1rem">
      <strong>{form.error}</strong>
    </center>
  {:else if form?.success}
    <center style="color: limegreen; margin:1rem">
      <strong>{form.success}</strong>
    </center>
  {/if}

  <button type="submit">Login</button>
  <center>
    <a href="register">Don't have an account? Register</a>
  </center>
</form>

<dialog open={showModal}>
  <article>
    <h3>Request Password Reset</h3>
    <form action="?/resetPassword" method="post">
      <input type="email" name="email" placeholder="Email" required />
      <button type="submit">Send Reset Email</button>
      <button class="secondary" on:click={() => (showModal = false)}
        >Cancel</button
      >
    </form>
  </article>
</dialog>
