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
	<img src={gallery[0]?.thumbnail} alt={gallery[0]?.alt} name={gallery[0]?.title} style:display="none"/>
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
			name={image.title} 
			hidden />
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
		display: block;
		position: absolute;
		--img-size: 100%;
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;

		/* overflow: hidden; */
		/* padding-left: 100%; */
		/* background-image: url('https://picsum.photos/1000'); */
		/* background-size: cover; */
	}
</style>
