import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// function MyApp() {
//   return <a href="https://google.com" target="_blank">Click Here</a>;
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Click Here</a>
)

const newElement = React.createElement(
  'a',
  {href :'https://www.wikipedia.org' , target:'_blank'},
  "Click me to visit Wikipedia"
)

createRoot(document.getElementById('root')).render(
    newElement
 
)
