import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	clearScreen: false,
	build: {
		minify: false
	}
};

export default config;
