import type { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { marked } from 'marked';

let getIn: unknown;

function get(value: string, event: any) {
	return event.getIn(['data', value]);
}

export default function ({
	entry: e,
	widgetsFor,
}: PreviewTemplateComponentProps) {
	const title: string = get('title', e);
	const name: string = get('name', e);
	const subName: string = get('subName', e);
	const logo: string = get('logo', e);
	const address = get('address', e);
	const email: string = get('email', e);
	const phone: string = get('phone', e);
	const orderLink: string = get('orderLink', e);
	const tagline: string = get('tagline', e);
	const parsedTagline = marked.parse(tagline.replaceAll('\n\n', '\n'));

	return (
		<>
			<div className="title">
				<p>{title}</p>
			</div>
			<div className="window">
				<header>
					<div className="logo-title">
						<img src={logo} alt="Logo" className="logo" />
						<h1 className="site-name">
							<span className="name">{name}</span>
							<span className="subname">{subName}</span>
						</h1>
					</div>
					<address>
						<span className="addr1">
							{widgetsFor('address').getIn(['data', 'address1'])}
						</span>
						<span className="addr2">
							{widgetsFor('address').getIn(['data', 'address2'])}
						</span>
						<span className="cityStateZip">
							{widgetsFor('address').getIn(['data', 'city'])}
							{widgetsFor('address').getIn(['data', 'city']) &&
							widgetsFor('address').getIn(['data', 'state'])
								? ','
								: ''}
							{widgetsFor('address').getIn(['data', 'state'])}&nbsp;
							<span className="zip">
								{widgetsFor('address').getIn(['data', 'zip'])}
							</span>
						</span>
					</address>

					<u>{email}</u>
					<u>{phone}</u>
					<u>{orderLink}</u>
				</header>
				<div
					className="tagline"
					dangerouslySetInnerHTML={{ __html: parsedTagline }}></div>
			</div>
		</>
	);
}
