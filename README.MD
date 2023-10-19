# MYSQL EMPLOYEE DATABASE TRACKER

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Instalation](#instalation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Licensing](#licensing)


## Description
This simple application uses the CLI to move through a companys employee database. It runs using mysql dbs, node, inquirer and mysql2.

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Instalation
To install go to the repository found at https://github.com/kiedae/employee-data-tracker clone the repository to your local machine, install all the dependancies
- Mysql
- Inquirer
- Node
- Mysql2

run mysql using
mysql -u root -p
enter your password
SOURCE scheema.sql
SOURCE seed.sql
quit

Run the script on the main folder 'npm run start'

## Usage
To use this application walk through the Installation instructions or watch the walkthrough found below, then use the arrow keys to navigate through the options of the CLI

https://drive.google.com/file/d/1vixNwaOpfNL_sxDWH_cFCNqdGvq6bHZR/view?usp=sharing


## Tests
The main test was connections through mysql. I tried multiple attempts at allowing the user to repeat inputs through one connection but ultimatly failed to allow the user to do this because of multiple connection bugs. This resulted in the user having to run the npm run start script every time they wanted to make another selection, this is definitly the big issue I need to iron out in the future.

## Questions
All questions can be directed to me personally at 

ernestwilliams335@gmail.com

OR

https://github.com/kiedae

## Links 
WALKTHROUGH

https://drive.google.com/file/d/1vixNwaOpfNL_sxDWH_cFCNqdGvq6bHZR/view?usp=sharing

REPOSITORY

https://github.com/kiedae/employee-data-tracker

## Licensing
This application uses the MIT License
