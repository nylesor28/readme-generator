// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseLogo = "";
  

  

  if ( license.includes("Apache")){
    licenseLogo =
    "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)";
    
  
  }
  else if( license.includes("Boost")){
    licenseLogo =
    "![License: Boost](https://img.shields.io/badge/License-Boost-yellow.svg)";
    
  
}
  else if( license.includes("Mozilla")){
    licenseLogo =
    "![License: MPL 2.0](https://img.shields.io/badge/License-Mozilla2.0-yellow.svg)";
    

}
  else if (license.includes("MIT")) {
    licenseLogo =
    "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  

  }
  else if (license.includes("ISC")){
    licenseLogo =
    "![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)";
    
  ;}

  else if (license.includes("GPLv3")){
    licenseLogo =
    "![License: GNU GPL v3](https://img.shields.io/badge/License-GNU%20GPLv3%20-yellow)";
    
 }
    else 
    licenseLogo = "";
    return licenseLogo;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let licenseLink = "";


    if ( license.includes("Apache")){
      licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
     
    
    }
    else if( license.includes("Boost")){
      licenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
      
    
  }
    else if( license.includes("Mozilla")){
      licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
     

}
    else if (license.includes("MIT")) {
      licenseLink = "https://choosealicense.com/licenses/mit/";
   
 
    }
    else if (license.includes("ISC")){
      licenseLink = "https://choosealicense.com/licenses/isc/";
  
    ;}

    else if (license.includes("GPLv3")){
      licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";

   }
      else 
      licenseLink = "";
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
  let licenseSection = `
  ## License
  `

  let licenseText = ""
  if(license ){
    licenseText = ` ${renderLicenseBadge(license)}
    ${(renderLicenseLink(license))}`
  } 
  
  if(licenseText) {
    licenseText =`This  project is currently unlicensed `
  }
  licenseSection += licenseText


      return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `# ${data.projectNameData}
  ${renderLicenseBadge(data.licenseData)}

  # Description
${data.projectDescriptionData}

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#test)
* [Contributing](#​contributors)
* [Contact Me](#contact-me)
* [License](#license)


## Installation
${data.installInstructionsData}

## Usage
​${data.usageData}

## Test
${data.testData}

## ​Contributors
${data.contributorsData}

## Contact Me
 Contact me via github issue [${data.usernameData}](https://github.com/${data.usernameData}) or by [${data.emailData}](mailto:${data.emailData}).

 ${renderLicenseSection(data.licenseData)}


`;
}

module.exports = generateMarkdown;
