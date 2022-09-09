# Usage

`stylint` as config peerDependencies, so Make sure you have installed it in DevDependencies. Then

```
npm[yarn|pnpm] install @ts-config/stylelint-config --dev
```

Finnally, add the following to your `.stylelintrc` file

```
module.exports = {
  extends: "@ts-config/stylelint-config"
}
```
