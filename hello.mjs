import chalk from "chalk";
import validator from "validator";
const res = validator.isEmail("hello@.com");
console.log(res ? chalk.green(res) : chalk.red.inverse(res));
