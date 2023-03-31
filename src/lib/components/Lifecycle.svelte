<script lang="ts">
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';

	export let name: string;

	let [before, mounted, after] = [false, false, false];

	onMount(() => {
		mounted = true;
	});
	beforeUpdate(() => {
		before = true;
	});
	afterUpdate(() => {
		after = true;
	});
</script>

{#if before}
	<span data-testid="before">Before</span>
{/if}
{#if mounted}
	<span data-testid="mounted">Mounted</span>
{/if}
{#if after}
	<span data-testid="after">After</span>
{/if}

<span data-testid="always">Always {name}</span>
