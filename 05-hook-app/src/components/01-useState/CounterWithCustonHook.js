import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustonHook = () => {
  
  const {state, increment, decrement, reset } = useCounter( 10000 );
  
  return (
    <>
        <h1> Counter With Hook: {state} </h1>
        <hr/>

        <button onClick={ () => increment(2) } className='btn btn-primary'> +1 </button>
        <button onClick={ reset } className='btn btn-primary'> Reset </button>
        <button onClick={ () => decrement(1) } className='btn btn-primary'> -1 </button>
    </>
  )
}
