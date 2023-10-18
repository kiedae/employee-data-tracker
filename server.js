const mysql = require('mysql2');
const inquirer = require('inquirer');
const {viewDpt, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateRole} = require('./lib/methods');
  //PROMPT FOR OPTIONS
const prompting = () => { 
  inquirer.prompt({
  type: 'list',
  name: 'choices',
  message: 'What would you like to do?',
  choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update Employee Role', 'Finished']
}) .then((data) => {
  switch (data['choices']) {
    case 'View All Departments':
        viewDpt();
      break;

    case 'View All Roles': 
        viewRoles();
      break;
    
    case 'View All Employees':
        viewEmployees();
      break;

    case 'Add a Department':
        addDepartment();
      break;
    
    case 'Add a Role':
        addRole();
      break;

    case 'Add an Employee':
        addEmployee();
      break;
    
    case 'Update Employee Role':
        updateRole();
      break;
    
    case 'Finished':
      break;
   }
 });
};

prompting();
module.exports = { prompting }; 