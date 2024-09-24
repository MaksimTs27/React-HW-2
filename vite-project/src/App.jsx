import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function handleClick () {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
  })
 

  return (
    <>
    <div>
      <button onClick={useEffect}>Fetch Posts</button>
      {posts.length > 0 && (
        <ul>
          {posts.map((posts) => (
            <li>{posts.id}</li>
            <li>{posts.title}</li>
            <li>{posts.body}</li>
           
          ))}
        </ul>
      )}
    </div>
  </>
};

export default handleClick;
