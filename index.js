// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "usernameData",
        message: "Enter your GitHub Username (Required)",
        validate: (userNameInput) => {
          if (userNameInput) {
            return true;
          } else {
            console.log("Please enter Github Username!");
          }
        },
      },
      {
        type: "input",
        name: "emailData",
        message: "Enter your contact email address (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
          }
        },
      },
    {
        type: "input", 
        message: "Enter your project name?",
        name: "projectNameData",
        validate : (nameInput) => {
            if(!nameInput){
                console.log("Please enter a project name")
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input", 
        message: "Enter your project description?",
        name: "projectDescriptionData",
        validate : (inputDescription) => {
            if(!inputDescription){
                console.log("Please enter a project description")
                return false;
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input", 
        message: "Provide installation Instructions?",
        name: "installInstructionsData",
        validate : (inputInstall) => {
            if(!inputInstall){
                console.log("Please enter installation Instructions")
                return false;
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input", 
        message: "Provide instructions and examples for use",
        name: "usageData",
        validate : (inputUsage) => {
            if(!inputUsage){
                console.log("Please enter Usage Instructions")
                return false;
            }
            else {
                return true;
            }
        }
    },
    {
        type: "list", 
        message: "Which license applies to the project?",
        name: "licenseData",
        choices: ["MIT",
                "ISC",
                "Apache License 2.0",
                "GNU GPLv3",
                "Boost Software License 1.0",
                "Mozilla Public License 2.0"],
        validate : (inputLicense) => {
            if(!inputLicense){
                console.log("Please select a license")
                return false;
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input", 
        message: "Who are the contributors for this project?",
        name: "contributorsData",
        validate : (inputContributers) => {
            if(!inputContributers){
                console.log("Please enter Usage Instructions")
                return false;
            }
            else {
                return true;
            }
        }
    }
    ,
    {
        type: "input", 
        message: "Provide details for how to test the application?",
        name: "testData",
        validate : (inputTest) => {
            if(!inputTest){
                console.log("Please enter Test Instructions")
                return false;
            }
            else {
                return true;
            }
        }
    }
];

const  promptUser = () =>{
    return inquirer.prompt(questions)
}

const sampleResponse = () => {
    obj =  {
        usernameData: 'nylesor28',
        emailData: 'rdorsainvil28@gmail.com',
        projectNameData: 'readme generator',
        projectDescriptionData: 'creates a quality readme file',
        installInstructionsData: '1. run npm i 2. run node index',
        usageData: 'answer the prompts see readme file in dist folder',
        licenseData: 'MIT',
        contributorsData: 'nylesor28',
        testData: 'n/a'
      }
    
      console.log(obj)
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    
    promptUser()
    .then((readmeData) => {
        console.log (readmeData)
    })
    .catch((err) => {
        console.log(err);
      })
}

// Function call to initialize app
init();
