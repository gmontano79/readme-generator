// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'whats is the description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation isntructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the USE for this application?',
      name: 'use',

    },
    {
      type: 'input',
      message: 'Is there a Deployment link?',
      name: 'deployment',
    },
    {
      type: 'input',
      message: 'is there any contributions?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'test Instruction?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'which License?',
      name: 'license',
      choices: ['Apache 2.0 (https://opensource.org/licenses/Apache-2.0) ',
        'Eclipse Public License 1.0 (https://opensource.org/licenses/EPL-1.0)',
        'GNU GPL v3 (https://www.gnu.org/licenses/gpl-3.0)',
        'IBM 1.0 (https://opensource.org/licenses/IPL-1.0)',
        'ISC License',
        'MIT License',
        'Mozilla Public 2.0',
        'oDbL',
        'Other']
    },
  ])

  .then(answers => {
    console.log(answers);




    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) { }

    fs.writeFile('README.md', `
 # ${answers.title}

 ## Table of Contents
*[installation] (#installation)
*[Usage] (#usage)
*[TestInstruction] (#installation)
*[Deploymentlink] (#installation)
*[Credits] (#installation)
*[Licences] (#installation)

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.use}

## Test Instructions

${answers.test}
 
## Deployment application link

${answers.deployment}

## Credits

${answers.contribution}

## License

${answers.license}


  `,
      (err) => {
        if (err) {
          throw err;
          console.log('err');
        }
        console.log('Your Documents has been generated.');

      }
    )
  })



    // // TODO: Create a function to initialize app
    // function init() { }

    // // Function call to initialize app
    // init();
