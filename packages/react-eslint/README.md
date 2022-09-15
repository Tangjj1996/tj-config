# Usage

`eslint` as config peerDependencies, so Make sure you have installed it in DevDependencies. Then

```
npm[yarn|pnpm] install @tangjj1996/eslint-config-react --dev
```

Finnally, add the following to your `.eslintrc.js` file

```
module.exports = {
  extends: "@tangjj1996/eslint-config-react"
}
```

Maybe used in `vite` which root `package.json` indicate `type: module`, then you could config `.eslintrc`

```
{
  extends: "@tangjj1996/eslint-config-react"
}
```
