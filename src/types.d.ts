declare module 'accessible-astro-components' {
	export function Modal(_props: ModalProps): any;

	interface ModalProps {
		triggerId: string;
		title: string;
		closeText: string;
	}
}
