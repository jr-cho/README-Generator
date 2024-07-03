#!/usr/bin/env node

import fs from 'fs';
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';

const generateREADME = (answers) => {
  return `
# ${answers.projectName}

## Description
${answers.description}

## Requirements
\`\`\`
${answers.installation}
\`\`\`

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
\`\`\`
${answers.usage}
\`\`\`

## License
This project is licensed under the ${answers.license} license.

## More
You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;
};

const promptUser = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '📌 Project Name:',
    },
    {
      type: 'input',
      name: 'description',
      message: '📕 Project Description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: '🔒 Requirements:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: '👤 GitHub username:',
    },
  ]);

  return answers;
};

const main = async () => {
  console.log(chalk.redBright(figlet.textSync('README.md Generator')));
  
  const answers = await promptUser();
  const readmeContent = generateREADME(answers);

  fs.writeFileSync('README.md', readmeContent);

  console.log(chalk.green('README.md has been generated successfully!'));
};

main();