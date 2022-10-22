import { c as createVNode, F as Fragment } from '../entry.mjs';
import '@astrojs/netlify/netlify-functions.js';
import 'react';
import 'react-dom/server.js';
import 'html-escaper';
import 'mime';
import 'sharp';
/* empty css                          */import '@styled-icons/fa-brands';
import 'js-convert-case';
import '@altano/tiny-async-pool';
import 'kleur/colors';
import 'node:fs/promises';
import 'node:os';
import 'node:path';
import 'node:url';
import 'magic-string';
import 'node:stream';
import 'slash';
import 'image-size';
import 'marked';
import 'cookie';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const html = "<p>We build our menu with high-quality and inclusive food options. In addition to our classic mozzarella, we have THREE delicious vegan cheese options for our pizzas, along with plenty of fresh toppings!</p>";

				const frontmatter = {"title":"Our Food","sort":2,"thumbnail":"four-pizzas.jpeg","alt":"Four large pizzas with a variety of toppings"};
				const file = "/home/luke/repos/client-work/offcenter/src/data/sections/OurFood.md";
				const url = undefined;
				function rawContent() {
					return "\nWe build our menu with high-quality and inclusive food options. In addition to our classic mozzarella, we have THREE delicious vegan cheese options for our pizzas, along with plenty of fresh toppings!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				function getHeaders() {
					console.warn('getHeaders() have been deprecated. Use getHeadings() function instead.');
					return getHeadings();
				}				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					content.astro = {};
					Object.defineProperty(content.astro, 'headings', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."')
						}
					});
					Object.defineProperty(content.astro, 'html', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."')
						}
					});
					Object.defineProperty(content.astro, 'source', {
						get() {
							throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."')
						}
					});
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeaders, getHeadings, rawContent, url };
