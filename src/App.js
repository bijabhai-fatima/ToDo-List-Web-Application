import "./App.css"
import Add from "./Components/Add/Add"
import { useContext, useEffect, useState } from "react"
import List from "./Components/List/List"
import { AppContext } from "./AppContext"
import Verification from "./Components/Verfication/Verification"
import ToDoImage from "./assets/ToDoImage.png"
import ThreeDots from "./assets/ThreeDots.png"

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
        currentTask,
        logUserOut,
        currentIndex,
        setCurrentIndex,
        colorVeriables,
    } = useContext(AppContext)

    const [addingList, setAddingList] = useState(false)

    useEffect(() => {
        console.log("App render")
        console.log("your currnt user... ", currentUser)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [])
    useEffect(() => {}, users)

    const handleClick = ({ index, item }) => {
        setCurrentList(item)
        setCurrentIndex(index)
        console.log("========= current index===", currentIndex)
        console.log("your currnt list...", currentList)
        console.log("your current task....", currentTask)
    }

    return (
        <div className="App">
            <div className="Home-container">
                {loggedIn ? (
                    <div>
                        <div className="Home-header">
                            <h1>Welcome, {currentUser.username}!</h1>
                            <button
                                className="btn2 btn-logOut"
                                onClick={() => logUserOut()}
                            >
                                Log Out
                            </button>
                        </div>
                        <div
                            className={
                                currentList
                                    ? "Home-content-container active"
                                    : "Home-content-container"
                            }
                        >
                            <div
                                className={
                                    currentList
                                        ? "Home-content-Lists-container-active"
                                        : "Home-content-Lists-container"
                                }
                            >
                                {currentUser.lists.map((item, index) => (
                                    <div className={colorVeriables[index % 4]}>
                                        <div
                                            className={"Home-content-list-box "}
                                            onClick={() =>
                                                handleClick({ index, item })
                                            }
                                        >
                                            <div className="Home-content-list-box-header">
                                                <div className="Home-content-list-box-name">
                                                    {/* {item.listName} */}
                                                    {item.listName.length > 20
                                                        ? item.listName.substring(
                                                              0,
                                                              19
                                                          ) + "..."
                                                        : item.listName}
                                                </div>
                                                <div className="Home-content-list-box-menu-icon-container">
                                                    <img
                                                        className="Home-content-list-box-menu-icon"
                                                        src={ThreeDots}
                                                        alt="menu icon"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <small className="Home-content-list-box-small-text">
                                                    {item.items
                                                        ? item.items.length
                                                        : "0"}{" "}
                                                    tasks
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {currentList ? (
                                    ""
                                ) : (
                                    <Add
                                        specifier={"Add-list-icon-container"}
                                        functionName={addList}
                                    />
                                )}
                            </div>
                            <div className="Home-Current-list-container">
                                {currentList ? (
                                    <List
                                        backgroundColor={
                                            currentIndex
                                                ? colorVeriables[
                                                      currentIndex % 4
                                                  ]
                                                : colorVeriables[
                                                      (currentUser.lists
                                                          .length -
                                                          1) %
                                                          4
                                                  ]
                                        }
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="App-container1">
                        <div className="App-verification_container">
                            <div className="App--title">{title}</div>
                            <div className="App-verification-content_container">
                                <Verification />
                                <div className="App-verification-content_Image">
                                    <img
                                        src={ToDoImage}
                                        alt="To-Do List vector"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
