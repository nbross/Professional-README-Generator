// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message: "What is the title of the project?",
        name: "Title"
    }, {
        type:"input",
        message: "What is the project about? Give a description of the project?",
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents:",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "What does the user need to install to run the application?",
        name: "Installation"
    }, {
        type: "input",
        message: "How does someone use the app?",
        name: "Usage"
    }, {
        type: "list",
        message: "What license is being used?",
        name:"License",
        choices: ["MIT", "APACHE", "ISC", "NONE"]
    }, {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributing"
    }, {
        type: "input",
        message: "What are the commands needed to test the application?",
        name: "Testing"
    }, {
        type: "input",
        message: "Contact INFO for inquiries.",
        name: "Questions"
    }, {
        type: "input",
        message: "What is your Github username?",
        name: "Username"
    }, {
        type: "input",
        message: "What is your email address?",
        name: "Email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Success")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        });
}

// Function call to initialize app
init();
