# Usage

`eslint` as config peerDependencies, so Make sure you have installed it in DevDependencies. Then

```
npm[yarn|pnpm] install @ts-config/stylelint-config --dev
```

Finnally, add the following to your `.eslintrc` file

```
{
  extends: "@tj-config/eslint-config"
}
```