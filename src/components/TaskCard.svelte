<script lang="ts">
	import type { Project, Task, Material, InputMaterialDTO } from '$lib/types';
	import {
		Button,
		Card,
		Label,
		Input,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { PlusOutline, PlusSolid } from 'flowbite-svelte-icons';

	export let task: Task;
	//export let project: Project;

	$: {
		task.price = task.materials.map(t => t.price).reduce((a, b) => a + b, 0) + +task.labourCost;
	}

	let name: string;

	const handleClick = () => {
		task.materials = [...task.materials, {
			id: task.materials.length,
			name: `Material ${task.materials.length + 1}`,
		 	costPerUnit: 0, quantity: 0, price: 0}]
	}

	const handleInputFocus = (event: any) => {
		event.target.select();
	}
</script>

<Card size="lg" class="my-8 w-full">
	<h4
		contenteditable="true" bind:innerText={task.name}
		class="mb-2 w-max text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
	>
	</h4>
	<h6>Materials</h6>
	<Table>
		<TableHead>
			<TableHeadCell class="w-2/5" padding="px-1">Material name</TableHeadCell>
			<TableHeadCell class="w-1/5" padding="px-1">Unit price</TableHeadCell>
			<TableHeadCell class="w-1/5" padding="px-1">Quantity</TableHeadCell>
			<TableHeadCell class="w-1/5" padding="px-1">Price</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#each task.materials as material, index (material.id-1)}
				<TableBodyRow>
					<TableBodyCell  tdClass="px-1">
						<Input size="sm" on:focus={handleInputFocus} bind:value={material.name} />
					</TableBodyCell>
					<TableBodyCell tdClass="px-1">
						<Input type="number" on:focus={handleInputFocus} on:input={() => material.price = material.costPerUnit * material.quantity} size="sm" bind:value={material.costPerUnit}/>
					</TableBodyCell>
					<TableBodyCell tdClass="px-1">
						<Input type="number" on:focus={handleInputFocus} on:input={() => material.price = material.costPerUnit * material.quantity} size="sm" bind:value={material.quantity} />
					</TableBodyCell>
					<TableBodyCell tdClass="px-1">{material.price}</TableBodyCell>
				</TableBodyRow>
			{/each}
			<TableBodyRow>
				<Button on:click={handleClick} class="my-3 mx-auto" outline size="xs"><PlusOutline /></Button>
			</TableBodyRow>
		</TableBody>
	</Table>
	<Label class="space-y-2">
        <span>Labour Cost</span>
		<Input type="number" 
			class="w-1/4"
			on:focus={handleInputFocus} 
			bind:value={task.labourCost} required />
    </Label>
	<h2>{task.price}</h2>
	  
</Card>
