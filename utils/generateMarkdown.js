// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.Title}
  https://github.com/${data.Username}/${data.Title}
  ## Description
  ${data.Description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  The following necessary dependencies must be installed to run the application properly: ${data.Installation}
  ## Usage
  In order to use this app, ${data.Usage}
  ### Video
  [A walkthrough video of the README generator](https://youtu.be/b5TtGhV09G8)
  ### Screenshot
  ![alt text](assets/images/2022-04-23.png)
  # License
  This project is licensed under the ${data.License} license. 
  # Contributing
  ​Contributors: ${data.Contributing}
  # Tests
  The following command is needed to run the test: ${data.Testing}
  # Questions
  If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
`;
}

module.exports = generateMarkdown;
