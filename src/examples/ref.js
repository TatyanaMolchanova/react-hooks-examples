import {useEffect, useRef, useState} from "react";

// let renderCount = 1

function App() {
    // let [renderCount, setRenderCount] = useState(1)
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current)
        console.log(inputRef.current.value)
        // renderCount++
        // setRenderCount(prev => prev + 1)
    }) // infinite loop

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div>
            {/*<h1>Quantity of Renders: {renderCount}</h1>*/}
            <h1>Quantity of Renders: {renderCount.current}</h1>
            <h2>Previous State: {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn-success" onClick={focus}>Focus</button>

        </div>
    );
}

export default App;
