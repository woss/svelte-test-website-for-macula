import macualaAdapter from '@anagolay/sveltekit-adapter-macula';
import vercelAdapter from '@sveltejs/adapter-vercel';
import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// import AnSettings from './.anagolay.json' assert {type: "json"};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		adapter: macualaAdapter({
			appType: 'static',
			address: '5EDGDLw5xDmgWVTkucjdnN7u3mtAk2DiQGmfGDEHFeDjdBqE',
			precompress: true
		}),
		// adapter: vercelAdapter(),
		// adapter: staticAdapter(),
		// adapter: autoAdapter(),
		// adapter: adapter({
		// 	appType: 'spa',
		// 	precompress: false
		// }),
		// adapter: adapter({
		// pages: '.anagolay',
		// assets: './assets',
		// fallback: 'index.html',
		// precompress: false
		// }),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},

		// this will work fine with the IPFS as long as it is done on the subdomain
		trailingSlash: "always",
		// paths: {
		// this is only for the ssr it seems
		// base: '/macula'
		// },
	},
};
export default config;
