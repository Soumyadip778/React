

function App() {
    let count = 5
    function increase() {
        count++
        console.log(count);
        
    }
    function decrease() {
        count--
         console.log(count);
    }
    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={increase}>Increase Count</button>
            <br />
            <button onClick={decrease}>Decrease Count</button>
        </>
    )
}

export default App
