import type { CmsCollection } from 'netlify-cms-core';

export const gallery: CmsCollection = {
	label: 'Photo Gallery',
	label_singular: 'Photo',
	name: 'gallery',
	description: 'Photos for the slideshow at the top of the site.',
	folder: 'src/data/gallery',
	extension: 'json',
	create: true,
	fields: [
		{
			label: 'Name',
			name: 'title',
			widget: 'string',
		},
		{
			label: 'Image',
			name: 'thumbnail',
			widget: 'image',
			allow_multiple: false,
		},
		{
			label: 'Image Description',
			name: 'alt',
			widget: 'string',
			hint: 'Please provide a brief description of the image. This allows users who cannot see the image to have its context. For example: *A veggie pizza with olives, mushrooms, and spinach*, *A vegan sausage calzone*. For more information, [click here](https://supercooldesign.co.uk/blog/how-to-write-good-alt-text).',
		},
	],
};
