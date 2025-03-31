
import { Suspense } from 'react'
import './App.css'
import Count from './increase'
import ShowHide from './showHide'
import Users from './userList'

const allUsers= async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}


function App() {

  const userPromise = allUsers()

  return (
    <>
      <h2>Practice tasks</h2>
      <Count></Count>
      <ShowHide></ShowHide>

    <Suspense fallback={<h2>loading...</h2>}>
      <Users userPromise={userPromise}></Users>
    </Suspense>

    </>
  )
}

export default App
