<script>
  export let form
</script>

<h1>Register</h1>
<form method="post">
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <input
    type="password"
    name="password"
    placeholder="Password"
    required
    minlength="8"
  />
  <input
    type="password"
    name="passwordConfirm"
    placeholder="Confirm Password"
    required
    minlength="8"
  />

  {#if form?.error}
    <center style="color: crimson; margin:1rem">
      <strong>{form.error}</strong>
    </center>
  {/if}

  <button type="submit">Register</button>
  <center>
    <a href="login">Already have an account? Login</a>
  </center>
</form>
