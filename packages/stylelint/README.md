# Usage

`stylint` as config peerDependencies, so Make sure you have installed it in DevDependencies. Then

```
npm[yarn|pnpm] install @tangjj1996/stylelint-config --dev
```

Finally, add the following to your `.stylelintrc.js` file

```
module.exports = {
  extends: "@tangjj1996/stylelint-config"
}
```
