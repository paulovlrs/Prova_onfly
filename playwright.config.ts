import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://www.mercadolivre.com.br',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  retries: 1,
  reporter: [['list'], ['html']],
});