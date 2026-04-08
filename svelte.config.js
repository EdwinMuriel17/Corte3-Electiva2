import adapter from '@sveltejs/adapter-static';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubPages ? '/Corte3-Electiva2' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: basePath
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
