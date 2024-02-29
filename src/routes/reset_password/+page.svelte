<script>
	// @ts-nocheck
	import { enhance } from '$app/forms';
	import { Label, Input, Button, Card } from 'flowbite-svelte';
	export let form;
</script>

<div class="flex h-max justify-center">
	<Card class="w-full max-w-md">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Reset password</h3>
		<form class="flex flex-col space-y-6" action="?/reset_password" method="POST" use:enhance>
			<Label for="email">
				<span>Email</span>
				<Input type="email" name="Email" placeholder="name@domain.com" required />
			</Label>

			<Button type="submit">Get password</Button>
		</form>
		{#if form?.invalid}<mark>{form?.message}!</mark>{/if}
	</Card>
</div>
