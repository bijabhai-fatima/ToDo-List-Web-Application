import React, { useContext, useState, useEffect } from "react"
import { AppContext } from "../../AppContext"

const Register = () => {
    useEffect(() => {
        console.log("Register render")
        console.log("your currnt user... ", currentUser)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [])

    const {
        alreadyRegisterd,
        registerNewUser,
        setAlreadyRegisterd,
        currentList,
        currentTask,
        currentUser,
    } = useContext(AppContext)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="Verification-container">
            <div className="Verification-input-feild-container">
                <input
                    minLength={5}
                    type="text"
                    className="Verification-input-feild "
                    placeholder="Enter username"
                    onChange={(u) => setUsername(u.target.value)}
                />
                <input
                    type="email"
                    className="Verification-input-feild"
                    placeholder="Your Email Address"
                    onChange={(u) => setEmail(u.target.value)}
                />
                <input
                    minLength={5}
                    type="password"
                    className="Verification-input-feild"
                    placeholder="Create Password"
                    onChange={(u) => setPassword(u.target.value)}
                />
            </div>
            <div className="Verification-buttons-container">
                {username.length < 5 &&
                email.length < 5 &&
                password.length < 5 ? (
                    <button
                        className="btn1 btn-register"
                        onClick={() =>
                            registerNewUser(username, email, password)
                        }
                        disabled
                    >
                        Register
                    </button>
                ) : (
                    <button
                        className="btn1 btn-register"
                        onClick={() =>
                            registerNewUser(username, email, password)
                        }
                    >
                        Register
                    </button>
                )}
                <small className="Verification-buttons-littletext">
                    already Registered?
                </small>
                <button
                    className="btn1 btn-logIn"
                    onClick={() => setAlreadyRegisterd(true)}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Register
