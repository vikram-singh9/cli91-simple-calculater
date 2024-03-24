#! /usr/bin/env node
import inquirer from "inquirer";
const material = await inquirer.prompt([
    {
        message: "enter firstnumber",
        type: "number",
        name: "firstnumber",
    },
    {
        message: "enter secondnumber",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "select the opertor bellow to perform action",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
if (material.operator == "+") {
    console.log(material.firstnumber + material.secondnumber);
}
else if (material.operator == "-") {
    console.log(material.firstnumber - material.secondnumber);
}
else if (material.operator == "*") {
    console.log(material.firstnumber * material.secondnumber);
}
else if (material.operator == "/") {
    console.log(material.firstnumber / material.secondnumber);
}
