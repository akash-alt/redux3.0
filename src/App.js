import React from 'react'
import "./App.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from './store';

const App = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addby = () => {
    dispatch(actions.addby(10))
  }

  return (
    <div className='app'>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decremnt</button>
      <button onClick={addby}>Addby 10</button>
    </div>
  )
}

export default App