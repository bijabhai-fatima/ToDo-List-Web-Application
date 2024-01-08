import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import { FaCheck } from "react-icons/fa"
import checkIcon from "../../check.png"
import deleteIcon from "../../delete.png"
import "./UnCheckedTask.css"

function UnCheckedTask() {
    useEffect(() => {
        console.log("Unchecked render")
        console.log("your currnt user... ", currentUser)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [])

    const {
        currentList,
        currentUser,
        currentTask,
        setCurrentTask,
        changeTaskName,
        checkTheTask,
        deleteTask,
    } = useContext(AppContext)
    useEffect(() => {
        console.log("r1")
    }, [currentList])
    return (
        <div>
            <div className="Unchecked-container">
                {currentList.items.length > 0
                    ? currentList.items.map((item, index) =>
                          item.status ? (
                              ""
                          ) : (
                              <div className="unchecked-content-container">
                                  <div className="uncheked-content-check-icon-container">
                                      <img
                                          src={checkIcon}
                                          alt="check icon"
                                          onClick={() => {
                                              checkTheTask(item)
                                          }}
                                      />
                                  </div>
                                  <div className="uncheked-content-text-container">
                                      <input
                                          type="text"
                                          class="unchecked-text"
                                          placeholder={item.task}
                                          onClick={() => setCurrentTask(item)}
                                          onBlur={(e) =>
                                              changeTaskName(e.target.value)
                                          }
                                      />
                                  </div>
                                  <div className="uncheked-content-delete-icon-container">
                                      <img
                                          src={deleteIcon}
                                          alt="delete icon"
                                          onClick={() => {
                                              deleteTask(item)
                                          }}
                                      />
                                  </div>
                              </div>
                          )
                      )
                    : ""}
            </div>
        </div>
    )
}

export default UnCheckedTask
