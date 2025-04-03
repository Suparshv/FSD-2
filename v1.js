import chalk from "chalk";
import validator from "validator";
var e1="lju@gmail.com"
var e2=""
var e3="lju"
console.log(validator.isEmail(e1))
console.log(validator.isLowercase(e3))
console.log(chalk.blue.underline.bold(validator.isEmpty(e2)))
