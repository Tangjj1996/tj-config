import { $, chalk, glob, question } from 'zx';
import fs from 'node:fs';

const errorLog = (str: string) => console.log(chalk.redBright(str));
const infoLog = (str: string) => console.log(chalk.whiteBright(str));
const doneLog = (str?: string) => console.log(chalk.greenBright(str ?? '✔ done'));

async function main() {
  try {
    infoLog('1. Bump version');
    const globPkg = await glob('packages/*/package.json');
    const eslintPkg = globPkg.find(item => item.match(/\/eslint\//));
    const eslintVersion = JSON.parse(fs.readFileSync(eslintPkg, 'utf-8')).version;
    const version = await question(
      `Please enter version info, current is ${eslintVersion} \n`,
    );

    infoLog('2. Generate Changelog');
    await $`npx standard-version -r ${version}`;
    doneLog();

    infoLog('3. Update recursive package');
    globPkg.forEach(path => {
      const pkg = JSON.parse(fs.readFileSync(path, 'utf-8'));
      pkg.version = version;
      fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
    });
    doneLog();

    infoLog('4. Npm publish');
    await $`git add -A`;
    await $`git commit --amend --no-edit`;
    await $`pnpm publish -r`;
    await $`git push --follow-tags`;
    doneLog();
  } catch (e) {
    errorLog(e);
  }
}

main();
