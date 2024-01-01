import React, { useContext } from "react"
import LogIn from "../LogIn/LogIn"
import Register from "../Register/Register"
import { AppContext } from "../../AppContext"

const Verification = ({}) => {
    const { alreadyRegisterd, checkIfAlreadyRegisterd } = useContext(AppContext)
    return <div>{alreadyRegisterd ? <LogIn /> : <Register />}</div>
}

export default Verification
