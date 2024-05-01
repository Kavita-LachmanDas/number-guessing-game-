#! /usr/bin/env node

import inquirer from "inquirer"
let condition = true;
while(condition){
const randomnumber = Math.floor(Math.random() * 7 + 1)
const answer = await inquirer.prompt([{
   name : "userguessednumber",
   type : "number",
   message : "guess the number between 1 to 7 ",
},])

if (answer.userguessednumber == randomnumber){
    console.log("conguratulations! you guessed right number")
}else {
    console.log("you guessed wrong number")
}
}