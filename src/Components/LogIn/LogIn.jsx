import React, { useContext, useEffect } from "react"
import { user, users, setCurrentUser } from "../../values"
import { useState } from "react"
import { AppContext } from "../../AppContext"

function LogIn() {
    useEffect(() => {
        console.log("LogIn render")
        console.log("your currnt user... ", currentUser)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [])

    const {
        loggedIn,
        logInTheUser,
        setAlreadyRegisterd,
        currentList,
        currentTask,
        currentUser,
    } = useContext(AppContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="Verification-container">
            <div className="Verification-input-feild-container">
                <input
                    type="email"
                    className="Verification-input-feild"
                    placeholder="Your Email Address"
                    onChange={(u) => setEmail(u.target.value)}
                />
                <input
                    type="password"
                    className="Verification-input-feild"
                    placeholder="Enter Password"
                    onChange={(u) => setPassword(u.target.value)}
                />
            </div>
            <div className="Verification-buttons-container">
                {" "}
                <button
                    className="btn1 btn-logIn"
                    onClick={() => logInTheUser(email, password)}
                >
                    LogIn
                </button>
                <small className="Verification-buttons-littletext">
                    new user?
                </small>
                <button
                    className="btn1 btn-register"
                    onClick={() => setAlreadyRegisterd(false)}
                >
                    Register
                </button>
            </div>
        </div>
    )
}

export default LogIn
