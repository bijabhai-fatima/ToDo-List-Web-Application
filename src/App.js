import logo from "./logo.svg"
import "./App.css"
import Register from "./Components/Register/Register"
import LogIn from "./Components/LogIn/LogIn"
import Add from "./Components/Add/Add"
import { list } from "./values"
import { useContext, useEffect, useState } from "react"
import List from "./Components/List/List"
import { AppContext } from "./AppContext"
import Verification from "./Components/Verfication/Verification"

function App() {
    const {
        title,
        registerNewUser,
        currentUser,
        setCurrentUser,
        users,
        loggedIn,
        setLoggedIn,
        logInTheUser,
        alreadyRegisterd,
        addList,
        currentList,
        setCurrentList,
        setCurrentTask,
    } = useContext(AppContext)

    const [addingList, setAddingList] = useState(false)

    useEffect(() => {}, users)

    return (
        <div className="App">
            <h1>{title}</h1>
            <h1>{users.length} Active Users</h1>

            {loggedIn ? (
                <div>
                    <h1>Welcome, {currentUser.username}!</h1>
                    <small>All lists</small>
                    <div>
                        {currentUser.lists.map((item, index) => (
                            <div>
                                <h4 onClick={() => setCurrentList(item)}>
                                    {item.listName}
                                </h4>
                            </div>
                        ))}
                    </div>
                    {currentList ? <List /> : ""}
                    <Add specifier={"list"} functionName={addList} />{" "}
                    <div>
                        <button
                            className="btn btn-warning"
                            onClick={() => {
                                setLoggedIn(false)
                                setCurrentList(null)
                                setCurrentUser(null)
                                setCurrentTask(null)
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            ) : (
                <Verification />
            )}
        </div>
    )
}

export default App
