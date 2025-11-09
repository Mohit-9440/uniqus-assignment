import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/types': path.resolve(__dirname, '../src/types'),
        '@/utils': path.resolve(__dirname, '../src/utils'),
        '@/hooks': path.resolve(__dirname, '../src/hooks'),
        '@/styles': path.resolve(__dirname, '../src/styles'),
        '@/lib': path.resolve(__dirname, '../src/lib'),
        '@/store': path.resolve(__dirname, '../src/store'),
      }
    }
    return config
  }
}
export default config