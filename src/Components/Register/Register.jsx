import { Button } from "bootstrap"
import React, { useContext, useState } from "react"
import { user, users, list } from "../../values"
import { AppContext } from "../../AppContext"

const Register = () => {
    const { alreadyRegisterd, registerNewUser, setAlreadyRegisterd } =
        useContext(AppContext)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="the-box">
            {" "}
            <form>
                <div className="the-box-content">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        onChange={(u) => setUsername(u.target.value)}
                    />
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
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            registerNewUser(username, email, password)
                        }
                    >
                        Register
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => setAlreadyRegisterd(true)}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register