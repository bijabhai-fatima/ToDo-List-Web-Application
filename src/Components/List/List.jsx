import React, { useState, useEffect, useContext } from "react"
import { IoMdArrowRoundBack } from "react-icons/io"
import { BsPenFill } from "react-icons/bs"
import "./List.css"
import Add from "../Add/Add"
import { item, currentUser, list } from "../../values"
import UnCheckedTask from "../UnCheckedTask/UnCheckedTask"
import CheckedTask from "../CheckedTask/CheckedTask"
import { AppContext } from "../../AppContext"

const List = () => {
    const {
        addTask,
        currentTask,
        setCurrentTask,
        currentUser,
        setCurrentList,
        currentList,
    } = useContext(AppContext)

    const [listname, setListname] = useState(currentList.listName)
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")

    const [updatingName, setUpdatingName] = useState(true)
    const [addingTask, setAddingTask] = useState(false)

    useEffect(() => {
        setTasks(currentList.items)
        console.log("rerenderd")
        console.log(currentList)
    }, [currentList])

    const hanbleBlur = () => {
        setUpdatingName(false)
        currentList.listName = listname
        console.log(currentList)
    }

    return (
        <div className="the-box">
            <div className="the-box-header">
                <div>
                    <IoMdArrowRoundBack onClick={() => setCurrentList(null)} />
                </div>
                <div>
                    {updatingName ? (
                        <input
                            type="text"
                            className="form-control"
                            placeholder={currentList.listName}
                            onChange={(e) => setListname(e.target.value)}
                            onBlur={() => hanbleBlur()}
                        />
                    ) : (
                        <input
                            type="text"
                            className="form-control"
                            placeholder={currentList.listName}
                            disabled
                        />
                    )}
                </div>
                <div>
                    <BsPenFill onClick={() => setUpdatingName(true)} />
                </div>
            </div>
            <div className="the-box-content">
                <UnCheckedTask />
                {addingTask ? (
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="checkbox" disabled />
                            </div>
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder={task}
                            onChange={(e) => {
                                setTask(e.target.value)
                            }}
                        />
                    </div>
                ) : (
                    <Add specifier={"Task"} functionName={addTask} />
                )}
                <CheckedTask />
            </div>
        </div>
    )
}

export default List
