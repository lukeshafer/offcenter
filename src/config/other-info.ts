import type { CmsCollection } from 'netlify-cms-core';

export const otherInfo: CmsCollection = {
	label: 'Other Information',
	label_singular: 'Item',
	name: 'footer-links',
	description:
		'Information in the footer of the site. Best for information you want to be easily accessible, but not necessarily seen by most users. Example: *Allergy Information*, *Privacy Policy*',
	folder: 'src/data/footer-links',
	create: true,
	fields: [
		{
			label: 'Title',
			name: 'title',
			widget: 'string',
		},
		{
			label: 'Link Name',
			name: 'linkName',
			widget: 'string',
			required: false,
			hint: 'The name shown on the site footer link. If blank, defaults to the title.',
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
