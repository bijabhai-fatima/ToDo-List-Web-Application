import React, { useEffect, useState } from "react"
import { user, users, list, item } from "./values"

export const AppContext = React.createContext()
const AppContextProvider = ({ children }) => {
    useEffect(() => {
        console.log("your currnt user... ", currentUser)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [])

    const title = "Welcome to To-Do List"

    const [currentUser, setCurrentUser] = useState(null)
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
        if (currentUser.lists) {
            currentUser.lists.push(new list("Give Name", []))
        } else {
            currentUser.lists = new Array(new list("Give Name"), [])
        }
        setCurrentList(currentUser.lists[currentUser.lists.length - 1])
        console.log("added the list..", currentList)
    }

    const changeListName = (newName) => {
        currentList.listName = newName
        console.log(currentList)
    }

    const addTask = () => {
        console.log("adding task........")
        console.log(currentList)

        const newItem = new item("New Task", false)
        if (currentList.items) {
            currentList.items.push(newItem)
        } else {
            currentList.items = new Array(newItem)
        }
        setCurrentTask(newItem)
        console.log("this you added.....", newItem)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }

    const changeTaskName = (newName) => {
        currentTask.task = newName
        console.log("name is changed to", newName)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }

    const checkTheTask = (item) => {
        console.log(
            "BEFORE => current task...is",
            currentTask,
            "and i am on",
            item
        )
        item.status = true
        console.log("i changed this.....", item)
        setCurrentTask(item)
        console.log("current list...is", currentList)
        console.log("current task...is", currentTask)
    }

    const logUserOut = () => {
        setCurrentUser(null)
        setCurrentList(null)
        setCurrentTask(null)
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
                changeListName,
                changeTaskName,
                logUserOut,
                checkTheTask,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
