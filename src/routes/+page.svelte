<script lang="ts">
	import Lifecycle from '$lib/components/Lifecycle.svelte';
	let lifecycleThis: Lifecycle;
	$: console.log(lifecycleThis);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Lifecycle name="foo" bind:this={lifecycleThis} />
