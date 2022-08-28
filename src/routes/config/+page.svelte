<script lang="ts">
	import { getStores, navigating, page, updated } from '$app/stores';
	import { onMount } from 'svelte';
	export const prerender = false;
	onMount(() => {
		console.log('getStores', getStores());
		console.log('navigating', $navigating);
		console.log('page', $page);
		console.log('updated', $updated);
	});
</script>

<pre class="text-start">{JSON.stringify($page, null, 2)}</pre>
