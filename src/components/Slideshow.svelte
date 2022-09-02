<script lang="ts">
	type Gallery = typeof import('../data/gallery.json');
	export let gallery: Gallery;

	let i = 0;
	let image: Gallery[number];

	function cycleImages() {
		image = gallery.at(i) || image;
		if (++i >= gallery.length) {
			i = 0;
		}

		setTimeout(cycleImages, 5000);
	}

	cycleImages();
</script>

<img src={image.thumbnail} alt={image.alt} name={image.name} />

<style>
	img {
		--img-size: 100%;
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
