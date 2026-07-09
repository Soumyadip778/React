import {useState} from 'react'
function App() {

    const [counter , setcounter] = useState(15)
    // let count = 5
    function increase() {
        setcounter(counter + 1)
    }
    function decrease() {
        if(counter == 0) return
       setcounter(counter - 1)
    }  
    return (
        <>
            <h1>Count : {counter}</h1>
            <button onClick={increase}>Increase Count</button>
            <br />
            <button onClick={decrease}>Decrease Count</button>
        </>
    )
}

export default App
 