import React, {useEffect, useState} from 'react';
// import Main from "./Main";
// import Alert from "./alert/Alert";
// import {AlertProvider} from "./alert/AlertContext";


// Custom Hooks  - the same hooks just used outside the Component
function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

//2-way binding
function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear,
    }

    // return {
    //     value, onChange
    // }

}

function App() {
    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    const input = useInput('')
    // const lastingName = useInput('')

    // const changeHandler = event => {
    //     setName(event.target.value)
    // }

    // useLogger(name)
    useLogger(input.value)

    // const changeLastNameHandler = event => {
    //     setLastName(event.target.value)
    // }


    return (
        <div className={"container pt-3"}>
            {/*<input type="text" value={name} onChange={changeHandler}/>*/}
            {/*<input type="text" {...input} />*/}
            <input type="text" {...input.bind} />
            {/*<input type="text" {...lastingName} />*/}
            {/*<input type="text" value={input.value} onChange={input.onChange}/>*/}
            {/*<input type="text" value={name} onChange={changeLastNameHandler}/>*/}
            {/*<h1>{name} {lastName}</h1>*/}
            <h1>{input.value}</h1>
            <button className="btn btn-warning" onClick={() => input.clear()}>Clear</button>
            {/*<h1>{input.value} {lastingName.value}</h1>*/}
        </div>
    )
    // return (
    //     <AlertProvider>
    //         <div className={"container pt-3"}>
    //             <Alert />
    //             <Main />
    //         </div>
    //     </AlertProvider>
    // );
}

export default App;
//usehooks.com
