import { $, sleep, chalk } from "zx";
import { spinner } from "zx/experimental";

const errorLog = (str: string) => console.log(chalk.redBright(str));
const infoLog = (str: string) => console.log(chalk.whiteBright(str));
const doneLog = (str?: string) => console.log(chalk.greenBright(str ?? "✔ done"));

async function main() {
  await spinner(`${chalk.green("Let's start...")}`, () => {});
  doneLog();
}

main();
