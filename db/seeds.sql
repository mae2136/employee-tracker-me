-- Fill with information to populate tables
-- Creates 4 basic departments
INSERT INTO department (name)
VALUES  (Sales),
        (Engineering),
        (Finance),
        (Legal);

-- Creates 6 basic roles
INSERT INTO role (title, salary, department_id)
VALUES  (`Salesperson`, 100000, 1),
        (`Lead Engineer`, 150000, 2),
        (`Software Engineer`, 125000, 2),
        (`Account Manager`, 200000, 3),
        (`Accountant`, 120000, 3),
        (`Lawyer`, 500000, 4);

-- Creates 6 basic employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mike", "Chan", 1, 2),
        ("Ricky", "Bobby", 4, NULL),
        ("Harry", "Potter", 3, 4),
        ("Michelle", "Costanza", 2, 2),
        ("James", "Smith", 5, 2),
        ("Gandalf", "the White", 6, NULL);