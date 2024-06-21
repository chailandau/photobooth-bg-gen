/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
    'prefer-destructuring': 'warn',
    'newline-before-return': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-filename-extension': [
        2,
        {
            extensions: ['.tsx'],
        },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
            fixStyle: 'separate-type-imports',
        },
    ],
    '@next/next/no-img-element': 'off',
    'sort-imports': [
        'error',
        {
            ignoreCase: true,
            ignoreDeclarationSort: true,
        },
    ],
    'import/order': [
        'error',
        {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'type'],
            pathGroups: [
                {
                    pattern: 'react',
                    group: 'external',
                    position: 'before',
                },
                {
                    pattern: '@octoml/design-system',
                    group: 'external',
                    position: 'after',
                },
            ],
            pathGroupsExcludedImportTypes: ['type'],
            'newlines-between': 'always',
            alphabetize: {
                order: 'asc',
                caseInsensitive: true,
            },
        },
    ],
};

/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'next',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
    ],
    rules,
    ignorePatterns: ['src/*.css'],
};
