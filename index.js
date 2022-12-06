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
      choices: [
        'Apache 2.0',
        'GNU GPL v3',
        'IBM 1.0',
        'MIT License',
        'Mozilla Public 2.0',
        'Other']
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is email?',
      name: 'email',
    }
  ])

  .then(answers => {
    console.log(answers);


    // FUNCTION TO CREATE BADGE 

    function createBadge(license) {
      var badge = "";
      if (answers.license === 'Apache 2.0') {
        badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
      } else if (answers.license === 'GNU GPL v3') {
        badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
      } else if (answers.license === 'IBM 1.0') {
        badge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
      } else if (answers.license === 'MIT License') {
        badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      } else if (answers.license === 'Mozilla Public 2.0') {
        badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
      } else {
        badge = ""
      }
      return badge;
    };

    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) { }

    fs.writeFile('README.md', `
 # ${answers.title}

## ${createBadge(answers.license)}


 ## Table of Contents

* [installation] (#installation)
* [Usage] (#usage)
* [TestInstructions] (#testinstructions)
* [Deploymentlink] (#deploymentlink)
* [Credits] (#credits)
* [Licences] (#license)
* [Questions] (#questions)


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


## Questions:

### For further questions contact me thru my GitHub profile or my email:
### GitHub profile: https://github.com/${answers.github}
### Email: ${answers.email}


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


// FUNCTION FOR BADGE




// // TODO: Create a function to initialize app
// function init() { }
// function init() {
//   inquirer.prompt(questions)
//     .then(function (answers) {
//       console.log(answers);
//       var fileContent = generateMarkdown(answers);
//       writeToFile(fileContent)
//     }
//     );

// }

// // Function call to initialize app
// init();
