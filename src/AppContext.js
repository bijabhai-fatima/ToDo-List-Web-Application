import React, { useEffect, useState } from "react"
import { user, users, list, item } from "./values"

export const AppContext = React.createContext()
const AppContextProvider = ({ children }) => {
    const title = "Welcome to To-Do List"

    const [currentUser, setCurrentUser] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [alreadyRegisterd, setAlreadyRegisterd] = useState(false)
    const [currentList, setCurrentList] = useState(null)
    const [currentTask, setCurrentTask] = useState(null)

    const checkIfAlreadyRegisterd = (email) => {
        var i = 0
        while (i < users.length) {
            if (users[i].email == email) {
                return true
            }
            return false
        }
    }

    const registerNewUser = (username, email, password) => {
        console.log(username, email, password)
        if (users.length > 0) {
            users.push(new user(username, email, password, []))

            console.log("pushed")
            console.log(users[users.length - 1].username)
        } else {
            users = new Array(new user(username, email, password, []))
        }
        setAlreadyRegisterd(true)
    }

    const logInTheUser = (email, password) => {
        var i = 0
        while (i < users.length) {
            if (users[i].email == email) {
                if (users[i].password == password) {
                    setLoggedIn(true)
                    setCurrentUser(users[i])
                } else {
                    console.log("Incorrect Password")
                }
            } else {
                console.log("Email not regietered")
            }
            i++
        }
    }

    const addList = () => {
        console.log("adding....")
        console.log(currentUser)
        if (currentUser.lists) {
            currentUser.lists.push(new list("Give Name", []))
        } else {
            currentUser.lists = new Array(new list("Give Name"), [])
        }
        setCurrentList(currentUser.lists[currentUser.lists.length - 1])
        console.log(currentUser)
    }

    const addTask = () => {
        console.log("adding task........")
        console.log(currentList)
        if (currentList.items) {
            currentList.items.push(new item("New Task", false))
        } else {
            currentList.items = new Array(new item("New Task", false))
        }
        setCurrentTask(currentList.items[currentList.items.length - 1])
        console.log(currentList, currentTask)
    }

    return (
        <AppContext.Provider
            value={{
                title,
                currentUser,
                setCurrentUser,
                registerNewUser,
                logInTheUser,
                loggedIn,
                setLoggedIn,
                users,
                alreadyRegisterd,
                setAlreadyRegisterd,
                checkIfAlreadyRegisterd,
                addList,
                currentList,
                setCurrentList,
                addTask,
                currentTask,
                setCurrentTask,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
