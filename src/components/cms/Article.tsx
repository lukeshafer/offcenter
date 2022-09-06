import type { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { marked } from 'marked';

function get(value: string, event: any) {
	return event.getIn(['data', value]);
}

export default function ({ entry: e }: PreviewTemplateComponentProps) {
	const title: string = get('title', e);
	const thumbnail: string = get('thumbnail', e);
	const alt: string = get('alt', e);
	const body: string = marked.parse(get('body', e));

	return (
		<article>
			<h2>{title}</h2>
			<img src={thumbnail} alt={alt}></img>
			<p dangerouslySetInnerHTML={{ __html: body }}></p>
		</article>
	);
}
