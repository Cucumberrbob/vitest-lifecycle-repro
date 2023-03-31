import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
	}
});
