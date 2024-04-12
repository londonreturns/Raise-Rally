import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  const data = { name: 'John', age: 30 };
  return (
    <>
    <h1>React one page to another data</h1>
    <Link to={`/other?name=${data.name}&age=${data.age}`}>Go to My Page</Link>
    </>
  )
}

export default Home
