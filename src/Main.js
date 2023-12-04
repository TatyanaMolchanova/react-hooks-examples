// import {useToggleAlert} from "./alert/AlertContext";

import {useAlert} from "./alert/AlertContext";

export default function Main() {
    // const toggle = useToggleAlert()
    // const {toggle} = useAlert()
    const {show} = useAlert()
    return (
        <>
            <h1>Hi in example with Context</h1>
            <button onClick={() => show('Text from Main.js')} className="btn btn-success">Show Alert</button>
        </>
    )
}
