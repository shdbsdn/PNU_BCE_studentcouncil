// vite.config.js
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	envPrefix: 'VITE_',
	server: {
	  port: 7588, // 원하는 포트를 이곳에 설정합니다.
	  strictPort: true,
	},
  });