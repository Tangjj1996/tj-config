# Usage

`eslint` as config peerDependencies, so Make sure you have installed it in DevDependencies. Then

```
npm[yarn|pnpm] install @tangjj1996/eslint-config-ts --dev
```

Finnally, add the following to your `.eslintrc.js` file

```
module.exports = {
  extends: "@tangjj1996/eslint-config-ts"
}
```
