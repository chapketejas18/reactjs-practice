import React, { useState, useMemo } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState(['Tejas']);
  const memoizedStudents = useMemo(() => students, [students]);

  const addStudent = () => {
    const newStudent = prompt('Enter the name of the new student:');
    if (newStudent) {
      setStudents([...students, newStudent]);
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {memoizedStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;
