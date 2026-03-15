import React, { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); });
  }, [url]);

  return { data, loading };
}

export default function App() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/1');
  if (loading) return <p>Loading...</p>;
  return <h3>{data?.title}</h3>;
}
