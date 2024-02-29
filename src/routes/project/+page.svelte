<script lang="ts">
    import type { PageData } from './$types';
    import { Button, Modal, Label, Input, Checkbox, Card } from 'flowbite-svelte';
	  import ProjectCard from '../../components/ProjectCard.svelte';

    let formModal = false;
    
    export let data: PageData;

    let projects = data.projectItems;
</script>
<div class="flex flex-row-reverse">
    <Button on:click={() => (formModal = true)}  size="sm" outline pill>Add project</Button>
</div>
<div class="flex flex-col md:justify-start items-center md:flex-row md:flex-wrap mt-10">
  {#each projects as project}
    <ProjectCard entry={project} />
  {/each}
</div>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <form method="POST" action="?/create" class="flex flex-col space-y-6">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add new project</h3>
      <Label class="space-y-2">
        <span>Project name</span>
        <Input type="text" name="project_name" placeholder="Project name" required />
      </Label>
      
      <Button type="submit" class="w-full1">Save project</Button>
    </form>
  </Modal>