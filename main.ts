#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.yellow("\n\t\t\t\t\t ****THE CLI WORD COUNTER**** \t\t\t\t\t\n")
);

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: chalk.cyan("Enter your sentence to count the words:"),
  },
]);

const words = answers.Sentence.trim().split(" ");
console.log(chalk.yellowBright("\n", "[", words, "]"));
console.log(
  chalk.cyan(
    `\nYour sentence word count is: ${chalk.rgb(350, 100, 100)(words.length)}`
  )
);
