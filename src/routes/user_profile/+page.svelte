<script>
    // @ts-nocheck
    export let data
</script>

<h2>User profile</h2>
{data.session.user.email}
<p><a href="/update_email">Change your email</a></p>
<p><a href="/update_password">Change password</a></p>