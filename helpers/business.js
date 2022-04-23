const inquirer = require(`inquirer`);
const cTable = require('console.table');

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
                name: 'options',
                message: 'What would you lik eo do?',
                choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', `Update an Employee Role`, `Quit`],
            }
                .then((answer) => {
                    // Create functions for each choice above, pick one based on what they picked
                    console.log(answer);
                })
        ]);
    }

    viewDepartments() {
        console.log(`Great! Let's view all Departments.`);
        // SQL query for all departments
        this.db.query(`SELECT * FROM department`, function (err, results) {
            console.table(results);
        });
        this.employeeHome();
    };

    viewRoles() {
        console.log(`Great! Let's view all Roles.`);
        // SQL query for all roles
        this.db.query(`SELECT * FROM role`, function (err, results) {
            console.table(results);
        });
        this.employeeHome();
    };

    viewEmployees() {
        console.log(`Great! Let's view all Employees.`);
        // SQL query for all employees
        this.db.query(`SELECT * FROM employee`, function (err, results) {
            console.table(results);
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
                    console.log(`${department} was successfuly added!`);
                    this.employeeHome();
                });
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
                { title, salary, department } = newRole;
                this.db.query(`INSERT INTO roles VALUE (?)`, newRole, function (err, results) {
                    console.log(`${department} was successfuly added!`);
                    this.employeeHome();
                });
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
            .then((newRole) => {
                this.db.query(`INSERT INTO roles VALUE (?)`, newRoles, function (err, results) {
                    console.log(`${department} was successfuly added!`);
                    this.employeeHome();
                });
            });
    };

    updateEmployee() {
        console.log(`Great! Let's update an employee's information`);
        // SQL query employees
    };

    // Exits program
    quit() {
        console.log("\nGoodbye!");

        process.exit(0);
    }

};

module.exports = Business;