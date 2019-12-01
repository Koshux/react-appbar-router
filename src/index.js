import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People'
import ListAltIcon from '@material-ui/icons/ListAlt'
import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp'

ReactDOM.render(<App pages={[
  {
    data: [10, 11, 12],
    path: '/',
    primary: 'Overriden Dashboard',
    icon: (<HomeIcon />),
    alt: 'Overriden Dashboard content',
    component: (
      <div><h2>Hi from Overriden Dashboard</h2></div>
    )
  },
  {
    data: [0, 1, 2],
    path: '/page-one',
    primary: 'Page One',
    icon: (<AccountBalanceSharpIcon />),
    alt: 'Page One content',
    component: (
      <div><h2>Hi from Page One</h2></div>
    )
  },
  {
    data: [3, 4, 5],
    path: '/page-two',
    primary: 'Page Two',
    icon: (<PeopleIcon />),
    alt: 'Page Two content',
    component: (
      <div><h2>Hi from Page Two</h2></div>
    )
  },
  {
    data: [6, 7, 8],
    path: '/page-three',
    primary: 'Page Three',
    icon: (<ListAltIcon />),
    alt: 'Page Three content',
    component: (
      <div><h2>Hi from Page Three</h2></div>
    )
  }
]}/>, document.getElementById('root'))
