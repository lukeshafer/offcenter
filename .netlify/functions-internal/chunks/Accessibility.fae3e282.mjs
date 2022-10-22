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

const html = "<p>Off Center: Patio &#x26; Pub has partnered with Luke Shafer Web Design to build this website. In doing so, we are committed to creating a website that is accessible and usable for all people. Accessibility is very important to us, and we want to make sure everyone can have a positive experience on this website.</p>\n<p>We aim to comply with web accessibility standards, including <a href=\"https://www.w3.org/TR/WCAG20/\">WCAG 2.0</a>.</p>\n<p>If you have issues with the accessibility of this website, please reach out to <a href=\"mailto:a11y@lukeshafer.com\">a11y@lukeshafer.com</a>. We take these matters very seriously, and someone will reach out to you as soon as possible to make your experience better.</p>";

				const frontmatter = {"title":"Accessibility","linkName":""};
				const file = "/home/luke/repos/client-work/offcenter/src/data/footer-links/Accessibility.md";
				const url = undefined;
				function rawContent() {
					return "\nOff Center: Patio & Pub has partnered with Luke Shafer Web Design to build this website. In doing so, we are committed to creating a website that is accessible and usable for all people. Accessibility is very important to us, and we want to make sure everyone can have a positive experience on this website.\n\nWe aim to comply with web accessibility standards, including [WCAG 2.0](https://www.w3.org/TR/WCAG20/).\n\nIf you have issues with the accessibility of this website, please reach out to a11y@lukeshafer.com. We take these matters very seriously, and someone will reach out to you as soon as possible to make your experience better.\n";
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
