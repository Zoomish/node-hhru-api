import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'node-hhru-api',
    environment: 'node',
    globals: true,
    testTimeout: 20_000,
    // ui: true,
    // open: true,
    retry: 2,
  },
})
