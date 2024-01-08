import React, { useState, useEffect, useContext } from "react"
import "./List.css"
import Add from "../Add/Add"
import backIcon from "../../assets/back.png"
import penIcon from "../../assets/pen.png"
import UnCheckedTask from "../UnCheckedTask/UnCheckedTask"
import CheckedTask from "../CheckedTask/CheckedTask"
import { AppContext } from "../../AppContext"

const List = ({ backgroundColor }) => {
    useEffect(() => {
        console.log("=============== ")
    }, [])
    const {
        addTask,
        currentTask,
        setCurrentTask,
        currentUser,
        setCurrentList,
        currentList,
        setCurrentIndex,
        currentIndex,
        colorVeriables,
    } = useContext(AppContext)

    const [listname, setListname] = useState(currentList.listName)
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")

    const [updatingName, setUpdatingName] = useState(false)
    const [addingTask, setAddingTask] = useState(false)

    // const [backgroundColor, setBackgroundColor] = useState(
    //     currentIndex
    //         ? colorVeriables[currentIndex % 4]
    //         : colorVeriables[(currentUser.lists.length - 1) % 4]
    // )

    const [theClass, setTheClass] = useState(
        "List-header-text-" + backgroundColor
    )

    useEffect(() => {
        console.log("List render")
        console.log("your currnt user... ", currentUser)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [])

    useEffect(() => {
        setTasks(currentList.items)
        console.log("rerenderd")
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [currentList])

    const hanbleBlur = () => {
        setUpdatingName(false)
        currentList.listName = listname
        console.log(currentList)
    }

    return (
        <div className="List-container">
            <div className={backgroundColor}>
                <div className="List-container-header">
                    <div className="List-container-header-back">
                        <img
                            src={backIcon}
                            alt="back icon"
                            onClick={() => {
                                setCurrentList(null)
                                setCurrentTask(null)
                                setCurrentIndex(null)
                                console.log(
                                    "your currnt list...back",
                                    currentList
                                )
                                console.log(
                                    "your current task....back",
                                    currentTask
                                )
                            }}
                        />
                    </div>
                    <div className="List-container-header-text">
                        {updatingName ? (
                            <input
                                type="text"
                                maxLength={30}
                                className={
                                    "List-header-text " + backgroundColor
                                }
                                placeholder={currentList.listName}
                                onChange={(e) => setListname(e.target.value)}
                                onBlur={() => hanbleBlur()}
                            />
                        ) : (
                            <div
                                type="text"
                                className="List-header-text"
                                placeholder={currentList.listName}
                                disabled
                            >
                                {" "}
                                {currentList.listName}
                            </div>
                        )}
                    </div>
                    <div className="List-container-header-rename">
                        <img
                            src={penIcon}
                            alt="pen icon"
                            onClick={() => setUpdatingName(true)}
                        />
                    </div>
                </div>

                <div>
                    <hr />
                </div>
                <div className="List-container-content">
                    <UnCheckedTask />
                    <Add
                        specifier={"Add-task-icon-container"}
                        functionName={addTask}
                    />
                    <CheckedTask />
                </div>
            </div>
        </div>
    )
}

export default List
