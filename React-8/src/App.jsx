import Form from './Form.jsx'
import './App.css'
import { useState,useEffect } from 'react'
import CommentForm from './CommentForm.jsx'
import Counter from './Counter.jsx'
import Joker from './Joker.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form></Form> */}
      {/* <CommentForm></CommentForm> */}
      {/* <Counter></Counter> */}
      <Joker/>
    </>
  )
}

export default App
