import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ fullName: '', mobile: '', city: 'Bengaluru' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); alert(JSON.stringify(form)); }}>
      <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" />
      <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile (+91)" />
      <button type="submit">Submit Form</button>
    </form>
  );
}
