// eslint.config.js
import { tanstackConfig } from '@tanstack/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
    // ─────────────────────────────────────────────────────────────────────────
    // Global ignores
    // ─────────────────────────────────────────────────────────────────────────
    {
        ignores: ['.output/**', '*.config.js', '*.config.mjs'],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // Base TanStack shared config (JS/TS, stylistic, etc.)
    // ─────────────────────────────────────────────────────────────────────────
    ...tanstackConfig,

    // ─────────────────────────────────────────────────────────────────────────
    // TanStack Query rules
    // ─────────────────────────────────────────────────────────────────────────
    ...pluginQuery.configs['flat/recommended'],

    // ─────────────────────────────────────────────────────────────────────────
    // TanStack Router rules
    // ─────────────────────────────────────────────────────────────────────────
    ...pluginRouter.configs['flat/recommended'],

    // ─────────────────────────────────────────────────────────────────────────
    // React Hooks + React Compiler rules (recommended-latest includes compiler)
    // ─────────────────────────────────────────────────────────────────────────
    reactHooksPlugin.configs.flat['recommended-latest'],

    // ─────────────────────────────────────────────────────────────────────────
    // Project-specific tweaks
    // ─────────────────────────────────────────────────────────────────────────
    {
        rules: {
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
]
