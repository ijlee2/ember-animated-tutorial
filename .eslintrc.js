module.exports = {
    globals: {
        server: true,
    },
    root: true,
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    plugins: [
        'ember',
    ],
    extends: [
        'eslint:recommended',
        'plugin:ember/recommended',
    ],
    env: {
        browser: true,
    },
    rules: {
        // For AirBnB style
        'array-bracket-spacing': [
            'error',
            'never',
            {
                'arraysInArrays': false,
                'objectsInArrays': false,
            },
        ],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            },
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true,
            },
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-spacing': [
            'error', {
                'before': false,
                'after': true,
            },
        ],
        'import/no-extraneous-dependencies': false,
        'import/no-unresolved': false,
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
            },
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            },
        ],
        'max-len': [
            'error',
            {
                code: 160,
                comments: 160,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'no-console': 0,
        'no-mixed-spaces-and-tabs': ['error'],
        'no-multi-spaces': [
            'error', {
                'exceptions': {
                    'Property': true,
                },
            },
        ],
        'no-tabs': ['error'],
        'no-trailing-spaces': [
            'error',
        ],
        'no-var': [
            'error',
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'one-var': [
            'error',
            'never',
        ],
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true,
            },
        ],
        'require-yield': 0,
        'semi': [
            'error',
            'always',
        ],
        'space-before-blocks': [
            'error',
            'always',
        ],
        'space-before-function-paren': [
            'error',
            'never',
        ],
        'space-infix-ops': [
            'error',
        ],
    },
    overrides: [
        // node files
        {
            files: [
                '.eslintrc.js',
                '.template-lintrc.js',
                'ember-cli-build.js',
                'testem.js',
                'blueprints/*/index.js',
                'config/**/*.js',
                'lib/*/index.js',
                'server/**/*.js',
            ],
            parserOptions: {
                sourceType: 'script',
                ecmaVersion: 2015,
            },
            env: {
                browser: false,
                node: true,
            },
        },

        // Mirage files
        {
            files: [
                'mirage/**/*.js',
            ],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};