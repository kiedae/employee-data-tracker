INSERT INTO department (name) VALUES
    ('HR'),
    ('Finance'),
    ('IT'),
    ('Marketing');

INSERT INTO manager (first_name, last_name) VALUES
    ('John', 'Doe'),
    ('Jane', 'Smith'),
    ('Michael', 'Johnson');

INSERT INTO roles (title, salary, department_id) VALUES
    ('HR Manager', 60000, 1),
    ('Accountant', 50000, 2),
    ('Software Engineer', 75000, 3),
    ('Marketing Specialist', 55000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Alice', 'Brown', 1, 1),
    ('Bob', 'Wilson', 2, NULL),
    ('Charlie', 'Davis', 3, NULL),
    ('David', 'Clark', 4, NULL);