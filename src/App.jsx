import { Suspense, useState } from 'react'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './users'
import Friends from './Friends'
import Posts from './Posts'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json()
}


function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts()
  function handleClick() {
    alert('i am clicked')
  }

  const handleClick3 = () => {
    alert('new click')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h3>Vite + React</h3>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Data Loading...</h3>}>
        <Friends friendsPromise={friendsPromise}>
        </Friends>
      </Suspense> */}

      <Suspense fallback={<p>posts are here...</p>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => handleAdd5(7)}>Click add 5</button>
    </>
  )
}

export default App
