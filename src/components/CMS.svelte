<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const CMS = (await import('netlify-cms-app')).default;
		CMS.init();
	});
</script>
