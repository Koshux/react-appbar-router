import React from 'react'
import AppBar from './components/app-bar'

export default function App (props) {
  return (
    <div className="app">
      {
        props.pages == null || props.pages.length === 0
          ? (<AppBar pages={[]}/>)
          : (<AppBar pages={[...props.pages]} />)
      }
    </div>
  )
}
