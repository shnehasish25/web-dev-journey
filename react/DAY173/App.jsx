import React from 'react';

function Header() {
  return <header><h1>Bengaluru Tech Hub</h1></header>;
}

function Footer() {
  return <footer><p>&copy; 2024 Kushal Sharma</p></footer>;
}

export default function App() {
  return (
    <div>
      <Header />
      <p>Components keep code modular and reusable.</p>
      <Footer />
    </div>
  );
}
