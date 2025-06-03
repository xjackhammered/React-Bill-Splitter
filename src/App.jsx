import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Friendlist from './Friendlist'


function App() {

    const entryElements = data.map((element)=> {
      return (
        <Friendlist 
          key={element.id}
          {...element}
        />
      )
    })

    return (
      <>
        {entryElements}
      </>
    )

}

export default App
