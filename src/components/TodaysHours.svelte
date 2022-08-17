<script lang="ts">
	type Hours = typeof import('../data/hours.json');
	export let hours: Hours;

	const today = new Date();

	console.log(today);
</script>

<p>Open 4pm - 10pm!</p>
