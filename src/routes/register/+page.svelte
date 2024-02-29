<script>
// @ts-nocheck
    import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
    import { enhance } from '$app/forms';
    export let form;
</script>

<div class="flex h-screen justify-center items-center">
    <Card class="w-full max-w-md">
      <form class="flex flex-col space-y-6" action="?/register" method="POST">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
        <Label for="email" class="space-y-2">
          <span>Email</span>
          <Input type="email" name="email" placeholder="name@company.com" value={form?.email ?? ''} required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input type="password" name="password" placeholder="•••••" required />
        </Label>
        <Button type="submit" class="w-full">Create account</Button>
      </form>
    </Card>
  </div>
  {#if form?.invalid}<mark>{form?.message}!</mark>{/if}