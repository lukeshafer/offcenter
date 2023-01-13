import type { CmsCollection } from 'netlify-cms-core';

export const articles: CmsCollection = {
	label: 'Articles',
	label_singular: 'Article',
	name: 'sections',
	description: 'Story articles for the main body of the site.',
	folder: 'src/data/sections',
	sortable_fields: ['sort', 'title'],
	create: true,
	fields: [
		{
			label: 'Title',
			name: 'title',
			widget: 'string',
		},
		{
			label: 'Sort Order',
			name: 'sort',
			widget: 'number',
			default: 1,
			value_type: 'int',
			min: 1,
			max: 10,
			hint: 'Lower number is listed first on the site. Ties are sorted alphabetically',
		},
		{
			label: 'Image',
			name: 'thumbnail',
			widget: 'image',
			hint: 'Note: Images do not work in the preview, but they will appear on the actual site.',
			allow_multiple: false,
			required: false,
		},
		{
			label: 'Image Description',
			name: 'alt',
			widget: 'string',
			hint: 'Please provide a brief description of the image. This allows users who cannot see the image to have its context. For example: *Our family at the beach*, *An Off Center employee preparing a pizza*. For more information, [click here](https://supercooldesign.co.uk/blog/how-to-write-good-alt-text).',
			required: false,
		},
		{
			label: 'Body',
			name: 'body',
			widget: 'markdown',
			buttons: [
				'bold',
				'italic',
				'link',
				'quote',
				'bulleted-list',
				'numbered-list',
			],
			editor_components: [],
			modes: ['rich_text'],
		},
	],
};
