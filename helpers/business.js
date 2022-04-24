const inquirer = require(`inquirer`);
const cTable = require('console.table');

const questions = ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', `Update an Employee Role`, `Quit`];

class Business {

    constructor(db) {
        this.db = db;
    }

    init() {
        console.log(`🚀 Welcome to the employee tracker. Let's get started! 🚀`);
        // Connect to database with hidden credentials
        this.employeeHome();
    }

    employeeHome() {
        inquirer.prompt([
            {
                // Ask user what they would like to do in the employee database
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: questions,
            },
        ])
        .then((answer) => {
            // Create functions for each choice above, pick one based on what they picked
            console.log(answer.choice);
            if (answer.choice == questions[0]) {
                this.viewDepartments();
            } else if (answer.choice == questions[1]) {
                this.viewRoles();
            } else if (answer.choice == questions[2]) {
                this.viewEmployees();
            } else if (answer.choice == questions[3]) {
                this.addDepartment();
            } else if (answer.choice == questions[4]) {
                this.addRole();
            } else if (answer.choice == questions[5]) {
                this.addEmployee();
            } else if (answer.choice == questions[6]) {
                this.updateEmployee();
            } else {
                this.quit();
            }
        });
    }

    viewDepartments() {
        console.log(`Great! Let's view all Departments.`);
        // SQL query for all departments
        this.db.query(`SELECT * FROM department`, function (err, results) {
            console.table("/n", results);
        });
        this.employeeHome();
    };

    viewRoles() {
        console.log(`Great! Let's view all Roles.`);
        // SQL query for all roles
        this.db.query(`SELECT * FROM roles`, function (err, results) {
            console.table("/n", results);
        })
        this.employeeHome();
    };

    viewEmployees() {
        console.log(`Great! Let's view all Employees.`);
        // SQL query for all employees
        this.db.query(`SELECT * FROM employee`, function (err, results) {
            console.table("/n", results);
        });
        this.employeeHome();
    };

    addDepartment() {
        console.log(`Great! Let's add a Department.`);
        // SQL add department
        inquirer.prompt([
            {
                type: "input",
                name: "newDepartment",
                message: "What would you like to name your department?",
            }
        ])
            .then((department) => {
                this.db.query(`INSERT INTO department VALUE (?)`, department, function (err, results) {
                    console.log(`The new Department was successfuly added!`);
                });
                this.employeeHome();
            });
    };

    addRole() {
        console.log(`Great! Let's add a Role.`);
        // SQL add role
        const departments = [];
        this.db.query(`SELECT * FROM department`, function (err, results) {
            departments.push(results);
        }); 
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What title do you want to give the role?",
            },
            {
                type: "input",
                name: "salary",
                message: "What salary should the role have?",
            },
            {
                type: "list",
                name: "department",
                message: "What department does the role belong to?",
                choices: departments,
            },
        ])
            .then((newRole) => {
                const { title, salary, department } = newRole;
                this.db.query(`INSERT INTO roles VALUE (?)`, newRole, function (err, results) {
                    console.log(`The new role was successfuly added!`);
                });
                this.employeeHome();
            });
    };

    addEmployee() {
        console.log(`Great! Let's add an Employee.`);
        // SQL add employee
        inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?",
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?",
            },
            {
                type: "input",
                name: "role",
                message: "What is the employee's role with the company?",
            },
            {
                type: "input",
                name: "manager",
                message: "Who is the employee's manager",
            },
        ])
            .then((newEmployee) => {
                this.db.query(`INSERT INTO roles VALUE (?)`, newEmployee, function (err, results) {
                    console.log(`The new employee was successfuly added!`);
                });
                this.employeeHome();
            });
    };

    updateEmployee() {
        console.log(`Great! Let's update an employee's information`);
        // SQL query employees and roles, make user pick from the list, then ask to input new information for that employee_id
        inquirer.prompt([
            {
                type: "list",
                name: "employee",
                message: "Which employee do you want to update?",
                choices: [],
            },
            {
                type: "list",
                name: "role",
                message: "What is the employee's new role?",
                choices: [],
            },
        ]).then((updatedEmployee) => {
            console.log(updatedEmployee);
            this.employeeHome();
        })
    };

    // Exits program
    quit() {
        console.log("\nGoodbye!");

        process.exit(0);
    }

};

module.exports = Business;