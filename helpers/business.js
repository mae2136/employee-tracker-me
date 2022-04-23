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
    };

    viewRoles() {
        console.log(`Great! Let's view all Roles.`);
        // SQL query for all roles
    };

    viewEmployees() {
        console.log(`Great! Let's view all Employees.`);
        // SQL query for all employees
    };

    addDepartment() {
        console.log(`Great! Let's add a Department.`);
        // SQL add department
    };

    addRole() {
        console.log(`Great! Let's add a Role.`);
        // SQL add role
    };

    addEmployee() {
        console.log(`Great! Let's add an Employee.`);
        // SQL add employee
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