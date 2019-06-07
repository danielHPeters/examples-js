import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import StringGenerator from './helper/StringGenerator'

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type={'button'} onClick={() => setIsOn(true)} disabled={isOn}>Start</button>
        <button type={'button'} onClick={() => setIsOn(false)} disabled={!isOn}>Stop</button>
        <p>{StringGenerator.createRandomLowerCaseString(StringGenerator.createRandomNumberWithinRange(3, 30))}</p>
      </header>
    </div>
  )
}

export default App
