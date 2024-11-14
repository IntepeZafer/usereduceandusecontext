import { useContext } from 'react'
import { NumberContext } from '../../src/App.jsx';
const Calculate = () => {
    const numberContext = useContext(NumberContext);
  return (
    <>
        <button onClick={() => numberContext.dispatch('+')}>+</button>
        <button onClick={() => numberContext.dispatch('-')}>-</button>
        <button onClick={() => numberContext.dispatch('*')}>X</button>
        <button onClick={() => numberContext.dispatch('/')}>/</button>
        <h1>İşlem Sonucu: {numberContext.state}</h1>
    </>
  )
}

export default Calculate
