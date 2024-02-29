<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';
    import type { PageData } from './$types';
	import TaskCard from '../../../components/TaskCard.svelte';
	import type { Task } from '$lib/types';
	import { enhance } from '$app/forms';
    
    export let data: PageData;

    //data.projectItem.tasks.push({id: data.projectItem.tasks.length + 1, name: "", materials: [], labourCost: 0, price: 0});

    let tasks: Array<Task> = data.projectItem.tasks;

    //console.log(data.projectItem);
    
    function handleClick() {
        tasks = [...tasks, {id: tasks.length + 1, name: `Task ${tasks.length + 1}`, materials: [], labourCost: 0, price: 0}];

        data.projectItem.tasks = tasks;
    }

    function calculatePrice() {
        let markUp = data.projectItem.markUp / 100;
        let tasksPrice = tasks.map(t => t.price).reduce((a, b) => a + b, 0);
        let price = (markUp * tasksPrice) + tasksPrice;
        return price;
    }

</script>

<h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.projectItem.name}</h1>

<div class="flex flex-row-reverse">
    <Button on:click={handleClick} size="sm" outline pill>Add task</Button>
</div>

<Label class="space-y-2">
    <span>Profit(Markup)</span>
    <Input type="number" min="0" max="100" class="w-1/4" bind:value={data.projectItem.markUp} required />
</Label>

<div class="flex flex-col items-center w-full">
    {#each tasks as task}
        <TaskCard bind:task={task} />
    {/each}
</div>

<form method="post" action="?/save" use:enhance={({formData}) => {
    data.projectItem.price = calculatePrice();
    formData.append('project_price', data.projectItem.price.toString());
}}>
    <input type="hidden" name="project_id" value="{data.projectItem.id}" />
    <input type="hidden" name="project_userId" value="{data.projectItem.userId}" />
    <input type="hidden" name="project_name" value="{data.projectItem.name}" />
    <input type="hidden" name="project_tasks" value="{JSON.stringify(tasks)}" />
    <input type="hidden" name="project_markUp" value="{data.projectItem.markUp}" />
    <Button type="submit" class="mt-2">Calculate</Button>
</form>


<h1 class="mt-24 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.projectItem.price}</h1>



