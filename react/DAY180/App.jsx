import React, { useState } from 'react';

export default function App() {
  const [likes, setLikes] = useState(10);

  const tripleLike = () => {
    setLikes(prev => prev + 1);
    setLikes(prev => prev + 1);
    setLikes(prev => prev + 1);
  };

  return (
    <div>
      <h3>Likes: {likes}</h3>
      <button onClick={tripleLike}>Triple Upvote (+3)</button>
    </div>
  );
}
