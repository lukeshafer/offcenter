<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
	interface Photo {
		title: string;
		thumbnail: string;
		alt: string;
	}

	export type Gallery = Photo[];
</script>

<script lang="ts">
	import { quintInOut } from 'svelte/easing';

	export let gallery: Gallery;

	let i = 0;
	let image = gallery[0] as Photo;

	function cycleImages() {
		if (++i >= gallery.length) {
			i = 0;
		}
		image = gallery[i] || image;
	}

	setInterval(cycleImages, 4000);
</script>

<div class="container">
	{#key image}
		<img
			in:fade={{
				delay: 0,
				duration: 1000,
				easing: quintInOut,
			}}
			out:fade={{
				delay: 1000,
				duration: 1000,
				easing: quintInOut,
			}}
			src={image.thumbnail}
			alt={image.alt}
			name={image.title} />
	{/key}
</div>

<style>
	.container {
		position: relative;
		height: 100%;
		width: 100%;
		z-index: -1;
	}

	img {
		position: absolute;
		--img-size: 100%;
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
