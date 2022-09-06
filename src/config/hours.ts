import type { CmsCollectionFile, CmsField } from 'netlify-cms-core';

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

export const hours: CmsCollectionFile = {
	label: 'Hours',
	name: 'hours',
	file: 'src/data/hours.json',
	fields: days
		.map((day) => {
			return {
				label: day,
				name: day.toLowerCase(),
				widget: 'object',
				collapsed: true,
				summary:
					'Closed: {{fields.closed}}, Hours: {{fields.openTime}} - {{fields.closeTime}}',
				fields: [
					{
						label: 'Closed?',
						name: 'closed',
						widget: 'boolean',
						required: false,
						hint: 'Open and close times will be ignored if restaurant is closed.',
					},
					...['Open', 'Close'].map((str) => {
						return {
							label: `${str} Time`,
							name: `${str.toLowerCase()}Time`,
							widget: 'datetime',
							date_format: false,
							time_format: 'h:mm A',
							format: 'h:mm A',
						};
					}),
				],
			} as CmsField;
		})
		.concat([
			{
				label: 'Holidays',
				label_singular: 'Holiday',
				name: 'holidays',
				widget: 'list',
				fields: [
					{
						label: 'Holiday',
						name: 'name',
						widget: 'string',
					},
					{
						label: 'Date',
						name: 'date',
						widget: 'DateTime',
						// @ts-ignore
						time_format: false,
						format: 'YYYYMMDD',
					},
					{
						label: 'Closed?',
						name: 'closed',
						widget: 'boolean',
						hint: 'Open and close times will be ignored if restaurant is closed.',
					},
					...['Open', 'Close'].map((str) => {
						return {
							label: `${str} Time`,
							name: `${str.toLowerCase()}time`,
							widget: 'datetime',
							date_format: false,
							time_format: 'h:mm A',
							format: 'h:mm A',
						};
					}),
				],
			} as CmsField,
		]),
};
