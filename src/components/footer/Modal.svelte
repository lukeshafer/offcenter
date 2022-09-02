<script lang="ts">
	import { fade } from 'svelte/transition';

	export let id: string, open: string;
	let dialog: HTMLDialogElement;
</script>

<button on:click={() => dialog.showModal()}>{open}</button>

<div class="wrapper">
	<dialog bind:this={dialog} {id} transition:fade>
		<slot name="main" />
		<form method="dialog">
			<slot name="close" />
		</form>
	</dialog>
</div>

<style>
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.wrapper {
		position: absolute;
	}

	dialog {
		position: fixed;
		--placement: 10%;
		left: var(--placement);
		top: var(--placement);
		transform: translate(-5%, -5%);

		transition: all 500ms;

		text-align: left;
	}

	dialog backdrop {
		position: fixed;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		/* background: rgba(255, 0, 0, 0.1); */
	}
</style>
