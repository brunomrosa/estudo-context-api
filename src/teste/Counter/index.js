import { useCountDispatch} from '../../count-context'
import React from 'react'

function Counter() {
  const dispatch = useCountDispatch()
  return (
    <>
    <button onClick={() => dispatch({type: 'increment'})}>
      Increment count
    </button>
     <button onClick={() => dispatch({type: 'decrement'})}>
     Decrement count
   </button>
   </>
  )
}

export default Counter