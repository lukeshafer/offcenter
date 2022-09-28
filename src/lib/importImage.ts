import { splitFileName } from './splitFileName';

export function importImage(file: string) {
	const [name, ext] = splitFileName(file);
	let image: Promise<any>;

	switch (ext) {
		case 'png':
			image = import(`../assets/${name}.png`);
			break;
		case 'jpg':
			image = import(`../assets/${name}.jpg`);
			break;
		case 'jpeg':
			image = import(`../assets/${name}.jpeg`);
			break;
		case 'avif':
			image = import(`../assets/${name}.avif`);
			break;
		case 'webp':
			image = import(`../assets/${name}.webp`);
			break;
		case 'svg':
			image = import(`../assets/${name}.svg`);
			break;
		case 'gif':
			image = import(`../assets/${name}.gif`);
			break;
		case 'bmp':
			image = import(`../assets/${name}.bmp`);
			break;
		case 'tiff':
			image = import(`../assets/${name}.tiff`);
			break;
		default:
			image = import(`../assets/${name}.png`);
	}

	return image;
}
