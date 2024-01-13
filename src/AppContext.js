import React, { useEffect, useState } from "react"
import { user, users, list, item } from "./values"
import axios from "axios"

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

    const [currentIndex, setCurrentIndex] = useState(null)

    const [message, setMessage] = useState("")

    const [colorVeriables, setColorVeriables] = useState([
        "colorOne",
        "colorTwo",
        "colorThree",
        "colorFour",
    ])

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
        // console.log(username, email, password)
        // if (users.length > 0) {
        //     users.push(new user(username, email, password, []))

        //     console.log("pushed")
        //     console.log(users[users.length - 1].username)
        // } else {
        //     users = new Array(new user(username, email, password, []))
        // }
        // setAlreadyRegisterd(true)

        axios
            .post("http://localhost:8000/register", {
                username: username,
                email: email,
                password,
                password,
            })
            .then((res) => {
                console.log(res)
                setAlreadyRegisterd(true)
            })
            .catch((error) => console.log(error))
    }

    const logInTheUser = (email, password) => {
        axios
            .get("http://localhost:8000/login", {
                params: {
                    email: email,
                    password: password,
                },
            })
            .then(function (response) {
                const res = response.data
                console.log(res)
                if (res.message) {
                    setMessage(res.message)
                } else {
                    console.log(typeof res.username)
                    const _currentUser = new user(
                        res.username,
                        res.email,
                        res.password,
                        res.lists
                    )
                    console.log("___current", _currentUser)
                    setCurrentUser(_currentUser)
                    setLoggedIn(true)
                }
            })
            .catch(function (error) {
                console.log(error)
            })
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

    const deleteTask = (item) => {
        console.log("current task...is", currentTask)
        console.log("deleteing.....", item)
        var updatedList = []
        var i = 0
        var index
        while (i < currentList.items.length) {
            if (currentList.items[i] == item) {
                console.log(
                    "_____________found it ___________",
                    currentList.items[i],
                    i
                )
                index = i
            } else {
                updatedList.push(currentList.items[i])
            }
            i++
        }
        console.log("new list..", updatedList)
        var updatedUser = currentUser
        updatedUser.lists[currentIndex] = new list(
            currentList.listName,
            updatedList
        )
        console.log("updated user....", updatedUser)
        setCurrentUser(updatedUser)

        setCurrentList(currentUser.lists[currentIndex])
        console.log("new list..", currentList)
    }

    const logUserOut = () => {
        console.log("------reload click", currentUser)
        setLoggedIn(false)
        setCurrentUser(null)
        setCurrentList(null)
        setCurrentTask(null)
        setCurrentIndex(null)
        axios
            .patch(`http://localhost:8000/logout/${currentUser.email}`, {
                lists: currentUser.lists,
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => console.log(error))
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
                message,
                checkTheTask,
                currentIndex,
                setCurrentIndex,
                colorVeriables,
                deleteTask,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
