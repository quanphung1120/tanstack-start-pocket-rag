// eslint.config.js
import { defineConfig } from 'eslint/config'
import { tanstackConfig } from '@tanstack/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'

export default defineConfig([
    // Base TanStack shared config (JS/TS, stylistic, etc.)
    ...tanstackConfig, // framework-agnostic baseline used by TanStack packages

    // TanStack Query rules
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        ...pluginQuery.configs['flat/recommended'], // recommended flat config for Query
    },

    // TanStack Router rules
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        ...pluginRouter.configs['flat/recommended'], // recommended flat config for Router
    },

    // Your project-specific tweaks
    {
        rules: {
            // examples – adjust as you like
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
])
