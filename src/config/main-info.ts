import type { CmsCollectionFile } from 'netlify-cms-core';

export const mainInfo: CmsCollectionFile = {
	label: 'Main Info',
	name: 'main-info',
	file: 'src/data/main-info.json',
	fields: [
		{
			label: 'Site Title',
			name: 'title',
			widget: 'string',
		},
		{
			label: 'Description',
			name: 'description',
			widget: 'string',
			hint: 'The description shown on Google and other search results for this website.',
		},
		{
			label: 'Main Name',
			name: 'name',
			widget: 'string',
		},
		{
			label: 'Subtitle',
			name: 'subName',
			widget: 'string',
		},
		{
			label: 'Logo',
			name: 'logo',
			widget: 'image',
		},
		{
			label: 'Address',
			name: 'address',
			widget: 'object',
			summary:
				'{{fields.address1}} {{fields.address2}} {{fields.city}}, {{fields.state}} {{fields.zip}}',
			fields: [
				{
					label: 'Address Line 1',
					name: 'address1',
					widget: 'string',
				},
				{
					label: 'Address Line 2',
					name: 'address2',
					widget: 'string',
					required: false,
				},
				{
					label: 'City',
					name: 'city',
					widget: 'string',
				},
				{
					label: 'State',
					name: 'state',
					widget: 'string',
				},
				{
					label: 'Zip Code',
					name: 'zip',
					widget: 'string',
				},
			],
		},
		{
			label: 'Email Address',
			name: 'email',
			widget: 'string',
		},
		{
			label: 'Phone Number',
			name: 'phone',
			widget: 'string',
			pattern: [
				'^[.()-\\s]*([2-9][.()-\\s]*){1}(\\d[.()-\\s]*){9}$',
				'Phone Number must be of format (555) 555-5555',
			],
		},
		{
			label: 'Online Order Link',
			name: 'orderLink',
			widget: 'string',
		},
		{
			label: 'Tagline',
			name: 'tagline',
			widget: 'markdown',
			buttons: ['bold', 'italic'],
			editor_components: [],
			modes: ['rich_text'],
		},
	],
};
