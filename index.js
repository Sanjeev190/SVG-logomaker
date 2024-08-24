const inquirer = require("inquirer");
const colors = require("colors");
const fs= require('fs');
const generatesvg=require("./lib/shapes.js")
inquirer
 .prompt([
    {
        type:'input',
        name:'Text',
        message:'please enter the three character?',
    },
    {
        type:'input',
        name:'textcolor',
        message:'please enter the text color',
    },
    {
        type:'list',
        name:'shape',
        message:'please select the Shape',
        choices:['square','circle','triangle'],
    },
    {
        type:'input',
        name:'backgroundcolor',
        message:'please enter the shapes color?'

    }
])
.then((answers)=>{
    console.log(answers)
    fs.writeFile('image.svg',generatesvg(answers),(err)=>{
        if(err){console.log(err)}
        else{console.log('file created')}
    })

})