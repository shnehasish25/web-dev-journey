import React, { useState } from 'react';

function SearchInput({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Type to filter..." />;
}

function DisplayCount({ text }) {
  return <p>Character count: {text.length}</p>;
}

export default function App() {
  const [sharedText, setSharedText] = useState('');

  return (
    <div>
      <SearchInput value={sharedText} onChange={setSharedText} />
      <DisplayCount text={sharedText} />
    </div>
  );
}
