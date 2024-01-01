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
        <div>
            {" "}
            <form>
                <div className="the-box-content">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                        onChange={(u) => setEmail(u.target.value)}
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Create Password"
                        onChange={(u) => setPassword(u.target.value)}
                    />
                </div>
                <div className="the-box-buttons">
                    {" "}
                    <button
                        className="btn btn-warning"
                        onClick={() => logInTheUser(email, password)}
                    >
                        LogIn
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => setAlreadyRegisterd(false)}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LogIn
