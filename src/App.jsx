import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Friendlist from './Friendlist'
import Form from './Form'
import React from 'react'


function App() { 

    const [friends, setFriends] = React.useState(data)
    const [toggle, setToggle] = React.useState(false)

    function toggleButton(){
      setToggle(prev => !prev)
    }

    const entryElements = friends.map((friend)=> {
      return (

          <Friendlist 
            key={friend.id}
            {...friend}
          />
      )
    })

    return (
      <>
        {entryElements}
        <button onClick={toggleButton}>Add friends</button>
        {toggle && <Form setFriends={setFriends} />}
      </>
    )

}

export default App
