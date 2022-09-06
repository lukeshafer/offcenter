import type { PreviewTemplateComponentProps } from 'netlify-cms-core';
import * as faBrands from '@styled-icons/fa-brands';
import { toPascalCase } from 'js-convert-case';
type FaIcon = keyof typeof faBrands;

function get(value: string, entry: any) {
	return entry.getIn(['data', value]);
}

function validateIcon(icon: string): icon is FaIcon {
	if (faBrands[icon as FaIcon] || false) {
		return true;
	} else return false;
}

export default function ({ entry: e }: PreviewTemplateComponentProps) {
	const socials = get('socials', e) as typeof e[];

	return (
		<ul className="hours">
			{socials.map((social, index) => {
				const href = social.get('url');
				const title = social.get('name');
				const iconName = toPascalCase(social.get('icon'));

				console.log(validateIcon(iconName));

				let Icon: any;
				if (validateIcon(iconName)) {
					Icon = faBrands[iconName];
				} else {
					Icon = null;
				}

				return (
					(Icon && (
						<div className="social">
							<a href={href} title={title} target="_blank" className="icon">
								<Icon />
							</a>
							<p>{title}</p>
						</div>
					)) ||
					(!Icon && <p className="error">Icon name {iconName} invalid</p>)
				);
			})}
		</ul>
	);
}
