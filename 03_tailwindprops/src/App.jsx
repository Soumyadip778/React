 
import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Music from './components/Music_Card.jsx'
 
function App() {
// const my_Obj ={
//   name : 'Soumyadip',
//   age : 19
// }
const new_Song = {
  Name : "Waka Waka",
  Artist : "Shakira"
}
  return(
    <>
    <Card />
    {/* <Music Name="Perfect" Artist="Ed Sheeran" /> */}
    <Music Details={new_Song}/>
    </>
  )
}

export default App
