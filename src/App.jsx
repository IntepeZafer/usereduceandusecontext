import React , { useEffect, useReducer } from 'react'
import './App.css'
import Calculate from '../public/Calculate/Calculate';

const instance = Number(localStorage.getItem('state')) || 0
const reducer = (state , action) => {
  switch (action) {
    case '+':
      return state + 1;
    case '-':
      return state - 1;
    case '*':
      return state * 2;
    case '/':
      return state / 2;
    default:
      return state
  }
}

export const NumberContext = React.createContext();

function App() {
  const [state , dispatch] = useReducer(reducer , instance);
  const increment = () => {
    dispatch('+')
  }
  const decrement = () => {
    dispatch('-')
  }
  const multiply = () => {
    dispatch('*')
  }
  const divide = () => {
    dispatch('/')
  }
  useEffect(() => {
    localStorage.setItem('state' , state)
  },[state])
  return (
    <>
    <div className="App">
      <NumberContext.Provider value={{state : state , increment : increment , decrement : decrement , multiply : multiply , divide : divide , dispatch : dispatch}}>
        <Calculate/>
      </NumberContext.Provider>
    </div>
    </>
  )
}

export default App
