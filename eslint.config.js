import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config([
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**']
  },

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React rules
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-key': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/self-closing-comp': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/display-name': 'warn',

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Console and debugging
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',

      // Variables and imports
      'no-unused-vars': 'off', // Turn off base rule for TypeScript
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_|^React$',
        },
      ],
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',

      // Code style
      'no-trailing-spaces': 'warn',
      'eol-last': 'warn',

      // Best practices
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'prefer-arrow-callback': 'warn',
      'no-return-assign': 'error',
      'no-lonely-if': 'warn',
      'no-unneeded-ternary': 'warn',
      'yoda': 'warn',

      // Disabled rules (handled by Prettier or personal preference)
      'comma-dangle': 'off',
      'indent': 'off',
      'object-curly-spacing': 'off',
      'func-style': 'off',
      'sort-imports': 'off',
      'prefer-destructuring': 'off',
      'object-shorthand': 'off',
      'dot-notation': 'off',
      'curly': 'off',
      'arrow-parens': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'no-multiple-empty-lines': 'off',

      // Prettier integration
      'prettier/prettier': ['error', {
        endOfLine: 'auto',
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        tabWidth: 2,
      }],
    },
  },

  {
    files: ['**/*.{js,jsx}'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  // Config files
  {
    files: ['*.config.{js,ts}', '*.config.*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
])
