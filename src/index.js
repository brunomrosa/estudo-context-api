import React from 'react'
import ReactDOM from 'react-dom'
import Teste from './teste'
import {CountProvider, useCountState} from './count-context'

function CountDisplay() {
  const {count} = useCountState()
  return <div>{`The current count is ${count}`}</div>
}



function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Teste />
    </CountProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
