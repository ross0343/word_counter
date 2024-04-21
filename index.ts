#! /usr/bin/env node
import inquirer from "inquirer"
async function para() {
    let user  = await inquirer.prompt({
        name : "userInput",
        message : "Please Enter A Text To Count It's Characters",
        type : "input"
    })
    let count = user.userInput.replace(/\s/g,'');
    // let count = user.userInput.trim(); 
    let text = count.length;
    console.log(`THE NUMBER OF CHARACTERS IN YOUR TEXT IS ${text}`)
}
para()


