<script>
  export let data
</script>

<div>
  <nav style="padding: 0 1rem;">
    <ul>
      <li>
        <strong><a href="/">Tiny Link</a></strong>
      </li>
    </ul>
    <ul>
      {#if !data.user}
        <li>
          <a href="/auth/login"> <button class="outline">Login</button></a>
        </li>
        <li>
          <a href="/auth/register"> <button>Register</button></a>
        </li>
      {:else}
        <li role="list" dir="rtl">
          <a href="#" aria-haspopup="listbox">
            <img
              src="https://api.dicebear.com/5.x/thumbs/svg?radius=50&seed={data
                .user.name}"
              alt="User Avatar"
              width="56"
            />
          </a>
          <ul role="listbox">
            <li>
              <span>Logged in as <strong>{data.user.name}</strong></span>
              <br />
              <small>{data.user.email}</small>
            </li>
            <li>
              <form action="/auth/logout" method="post" style="margin: 0;">
                <button type="submit" class="secondary">Logout</button>
              </form>
            </li>
          </ul>
        </li>
      {/if}
    </ul>
  </nav>
  <main class="container">
    <slot />
  </main>
</div>
