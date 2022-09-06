import type { PreviewTemplateComponentProps } from 'netlify-cms-core';

function get(value: string, entry: any) {
	return entry.getIn(['data', value]);
}

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

export default function ({ entry: e }: PreviewTemplateComponentProps) {
	const dayObjs = days.map((day) => get(day.toLowerCase(), e) as typeof e);
	const holidays = get('holidays', e) as typeof e[];

	return (
		<ul className="hours">
			{dayObjs.map((day, index) => {
				return (
					<li>
						<p className="day">{days[index]}</p>
						<p className="hours">
							{day.get('closed')
								? 'CLOSED'
								: `${day.get('openTime')} - ${day.get('closeTime')}`}
						</p>
					</li>
				);
			})}
		</ul>
	);
}
