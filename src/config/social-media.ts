import type { CmsCollectionFile } from 'netlify-cms-core';

export const socialMedia: CmsCollectionFile = {
	label: 'Social Media',
	name: 'socials',
	file: 'src/data/socials-test.json',
	fields: [
		{
			label: 'Accounts',
			name: 'socials',
			widget: 'list',
			fields: [
				{
					label: 'Name',
					name: 'name',
					widget: 'string',
				},
				{
					label: 'URL',
					name: 'url',
					widget: 'string',
				},
				{
					label: 'Icon',
					name: 'icon',
					widget: 'string',
					hint: 'Click [here](https://fontawesome.com/search?f=brands&o=r) for list of icon names. Use the name below the icon. Examples: *facebook-f, twitter, tiktok*. Avoid Icons already contained in a circle, if possible.',
				},
			],
		},
	],
};
