import React, { useState, useMemo } from "react";

export const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: "ABC", salary: 10000 },
    { name: "XYZ", salary: 90000 },
    { name: "PQR", salary: 50000 },
  ]);

  const averageSalary = useMemo(() => {
    const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
    return totalSalary / employees.length;
  }, [employees]);

  const updateSalaries = () => {
    setEmployees([
      { name: "ABC", salary: 5000 },
      { name: "XYZ", salary: 6000 },
      { name: "PQR", salary: 7000 },
    ]);
  };

  return (
    <div>
      <h2>Average Salary: {averageSalary}</h2>
      <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};
