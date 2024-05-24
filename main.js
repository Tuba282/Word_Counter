#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
// Welcome message
async function Welcome() {
    await new Promise((resolve) => {
        figlet("Welcome to Word Counter", { font: "Slant" }, function (err, data) {
            if (err) {
                console.dir("Oops something went wrong");
                console.log(err);
            }
            let animate = chalkAnimation.rainbow(data);
            setTimeout(() => {
                resolve(animate.stop());
            }, 3000);
        });
    });
}
await Welcome();
// main function start
async function main() {
    const Answer = await inquirer.prompt([
        {
            name: "text",
            type: "input",
            message: "\nEnter Your Text to count words: .\n",
        },
    ]);
    const words = Answer.text.trim().split(" ");
    console.table(words);
    console.log(`\nyou have written ${words.length} words in your text \n\n`);
}
async function again() {
    do {
        await main();
        var restart = await inquirer.prompt([
            {
                name: "again",
                type: "input",
                message: "\nDo you want to count your words again....?\n\nPress `Y` for yes "
            }
        ]);
    } while (restart.again === "y" || restart.again === "Y");
}
await again();
