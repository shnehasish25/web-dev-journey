import React, { useState, useEffect } from 'react';

export default function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await res.json();
        setPost(data);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, []);

  if (loading) return <p>Loading post data...</p>;
  return <div><h3>{post?.title}</h3><p>{post?.body}</p></div>;
}
