import React, { useState } from 'react';

export default function App() {
  const [student, setStudent] = useState({ name: 'Kushal', sem: 4, city: 'Bengaluru' });

  const promote = () => {
    setStudent(prev => ({ ...prev, sem: prev.sem + 1 }));
  };

  return (
    <div>
      <h3>{student.name} &bull; Sem {student.sem} &bull; {student.city}</h3>
      <button onClick={promote}>Promote Semester</button>
    </div>
  );
}
