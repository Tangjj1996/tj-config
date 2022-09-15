# Usage

`prettier` as config peerDependencies, so Make sure you have installed it in DevDependencies. Then

```
npm[yarn|pnpm] install @tangjj1996/pretiter --dev
```

Finnally, add the following to your `.prettierc.js` file

```
module.exports = {
  ...require("@tangjj1996/prettier")
}
```

Maybe used in `vite` which root `package.json` indicate `type: module`, then you could config `.prettierc`

```
"@tangjj1996/prettier"
```
