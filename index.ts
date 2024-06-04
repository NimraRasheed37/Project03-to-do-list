#! /usr/bin/env node

import inquirer from "inquirer"

console.log("To do List by Nimra Rasheed\n")
//initial values in todos (empty)
let todos: string[] = []

//this code is execuable from start untill it is turned false 
let loop = true;

while (loop) {
    //types of todo and add more
    const todoAns: {
        todo: string,

    } = await inquirer.prompt([{
        message: "Enter the Task you want to add in your To-do list:",
        name: "todo",
        type: "input"
    },
]); 
console.log(`\n"${todoAns.todo}" added in your tasks.\n`) 

const addAns = await inquirer.prompt([{
    message: "Do you want to add another task?",
        name: "addMore",
        type: "confirm",
        default: false,
}]);
//show answers
const {todo} = todoAns
const {addMore} = addAns
// console.log(`"${answers.todo}" added in your tasks.`) 

//condition of loop can be changes according to the answer
loop = addMore
if (todo) {
    todos.push(todo)
}
else {
    console.log("Kindly add valid input")
}
}
console.log("\t Your To do List: \n")
//condition to print values/tasks added in todo
if(todos.length >0) {
todos.forEach(todo => {
    console.log(`\t * ${todo}`);
});

//if there is no saved tasks, list will be empty
}else {
    console.log("No tasks found")
}