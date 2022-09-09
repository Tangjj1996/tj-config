# Usage

`stylint` as config peerDependencies, so Make sure you have installed it in DevDependencies. Then

```
npm[yarn|pnpm] install @ts-config/stylelint-config --dev
```

Finally, add the following to your `.stylelintrc` file

```
{
  extends: "@tj-config/stylelint-config"
}
```
