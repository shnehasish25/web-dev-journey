import React from 'react';

function CardWrapper({ title, children }) {
  return (
    <div className="wrapper-box">
      <h3>{title}</h3>
      <div className="content">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <CardWrapper title="Hostel Notice Board">
      <p>Water maintenance tomorrow morning 8:00 AM to 11:00 AM.</p>
      <button>Acknowledge</button>
    </CardWrapper>
  );
}
