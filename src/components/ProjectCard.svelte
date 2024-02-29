<script lang="ts">
	import type { Project } from "$lib/types";
	import { Button, Label, Input, Card, Dropdown, DropdownItem, Modal } from "flowbite-svelte";
    import { DotsVerticalOutline } from 'flowbite-svelte-icons'

    export let entry: Project;
    let formModal = false;

    
</script>
<Card class="mx-8 my-5 w-2/3 md:w-1/4">
    <div class="flex justify-end">
        <DotsVerticalOutline />
        <Dropdown class="w-36">
            <DropdownItem on:click={() => formModal = true}>Rename</DropdownItem>
        </Dropdown>
    </div>
    <h5 class="text-2xl text-center font-semibold tracking-widest">{entry.name}</h5>
    <p>{entry.tasks.length} {entry.tasks.length > 1 ? "tasks" : "task"}</p>
        <div class="flex w-full justify-center mt-4 space-x-3 rtl:space-x-reverse lg:mt-6">
            <Button href="/project/{entry.id}" size="lg" color="light" class="dark:text-white w-2/3 mx-auto">Open</Button>
        </div>
</Card>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <form method="POST" action="?/rename" class="flex flex-col space-y-6">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Rename project</h3>
      <Label class="space-y-2">
        <span>Project name</span>
        <Input value="{entry.name}" name="project_name" placeholder="Project name" required />
        <Input type="hidden" name="id" value="{entry.id}" />
      </Label>
      
      <Button type="submit" class="w-full">Save changes</Button>
    </form>
</Modal>