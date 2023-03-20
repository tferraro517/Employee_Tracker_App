//view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "",
    database: "employee_tracker_db",
  },
  console.log(`Connected to the employee_tracker_db.`)
);
