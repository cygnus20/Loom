<script>
// @ts-nocheck
    import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
    import { enhance } from '$app/forms';
    export let form;
</script>
<div class="flex h-screen justify-center items-center">
  <Card class="w-full max-w-md">
    <form class="flex flex-col space-y-6" action="?/login" method="POST">
      <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
      <Label for="email" class="space-y-2">
        <span>Email</span>
        <Input type="email" name="email" placeholder="name@company.com" value={form?.email ?? ''} required />
      </Label>
      <Label class="space-y-2">
        <span>Your password</span>
        <Input type="password" name="password" placeholder="•••••" required />
      </Label>
      <div class="flex items-start">
        <Checkbox>Remember me</Checkbox>
        <a href="/reset_password" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>
      </div>
      <Button type="submit" class="w-full">Login to your account</Button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a href="/register" class="text-primary-700 hover:underline dark:text-primary-500"> Create account </a>
      </div>
    </form>
    <form method="POST" action="?/googleOAuth">
      <Button type="submit">Sign In With Google</Button>
    </form>
  </Card>
</div>
{#if form?.invalid}<mark>{form?.message}!</mark>{/if}