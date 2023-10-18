const mysql = require('mysql2');
const inquirer = require('inquirer');

// mysql connection to login and get the company_db database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // replace with your MySQL username IF your default user isn't 'root'
      user: 'root',
      // Replace with your MySQL password
      password: '1234',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

  // viewDpt, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateRole

  const viewDpt = () => {
    db.query(
        `SELECT * FROM department`,
        function (err, res) {
            if (err) {
                console.log(err);
                return;
            }
            console.table(res);
            prompting();
        }
    );
  };

  const viewRoles = () => {
    db.query(
        `SELECT roles.id, roles.title, roles.salary, department.name
        FROM roles
        LEFT JOIN department
        ON roles.department_id = department.id`,
        function (err, res) {
            if(err) {
                console.log(err);
                return;
            }
            console.table(res);
            prompting();
        }
    
    );
    };

    const viewEmployees = () => {
        db.query(
            `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id
            FROM employee`,
            function (err, res) {
                if(err) {
                    console.log(err)
                    return;
                }
                console.table(res);
                prompting();
            }
        )
    };

    const addDepartment = () => {
        inquirer.prompt({
            type: 'text',
            name: 'department_name',
            message: 'What would you like to name this department?'
        }).then((data) => {
            db.query(
                `INSERT INTO department(name)
                VALUES(?)`,
                [data.deparment_name],
                function(err) {
                    if(err) {
                        console.log(err);
                        return;
                    }

                    console.log(`Department ${deparment_name} was added`);
                    prompting();
                }

            )
        }) 
    };

    const addRole = () => {
        inquirer.prompt({
            type: 'text', 
            name: 'role_name',
            message: 'What role would you like to add?'
        }).then((data) => {
           db.query( `INSERT INTO roles(title)
            VALUES(?)`,
            [data.role_name],
            function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log(`${role_name} added to roles!`);
                prompting();
            }
           )
        })
    };

    const addEmployee = () => {
        inquirer.prompt([
            {
            type: 'text',
            name: 'first_name',
            message: 'Whats the employees first name?'
            },
            {
                type: 'text',
                name: 'last_name',
                message: 'Whats the Employees last name?'
            }
    
    ]).then((data) => {
        db.query(
            `INSERT INTO employees (first_name, last_name)
            VALUES(?,?)`,
            [data.first_name, data.last_name],
            function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
            console.log(`${data.first_name} ${data.last_name} was added to the employees table`);
            prompting();
            }
        )
    })
    };

const updateRole = () => {
   inquirer.prompt([
        {
            type: 'text',
            name: 'first_name',
            message: 'What is the first name of the employee whos role you would like to change?'
        },
        {
            type: 'text',
            name: 'last_name',
            message: 'What is the last name of the employee whos role you would like to change?'
        },
        {
            type: 'text',
            name: 'role',
            message: 'What is the ID of the role you would like to give the employee?',
        }
    ]).then((data) => {
        db.query(
            `UPDATE employee
            SET role_id = ? 
            WHERE first_name = ? AND last_name = ?`,
            [role, first_name, last_name],
            function(err) {
            
                if(err) {console.log(err);
                return;
                }
                console.log('Role updated.')
                prompting();
            }
                )

    }
    
    )


};

module.exports = { viewDpt, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateRole };