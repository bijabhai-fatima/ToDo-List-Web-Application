import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import { FaCheck } from "react-icons/fa"

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
    } = useContext(AppContext)
    useEffect(() => {
        console.log("r1")
    }, [currentList])
    return (
        <div>
            {currentList.items.length > 0
                ? currentList.items.map((item, index) =>
                      item.status ? (
                          ""
                      ) : (
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <div class="input-group-text">
                                      <FaCheck
                                          onClick={() => {
                                              checkTheTask(item)
                                          }}
                                      />
                                  </div>
                              </div>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder={item.task}
                                  onClick={() => setCurrentTask(item)}
                                  onBlur={(e) => changeTaskName(e.target.value)}
                              />
                          </div>
                      )
                  )
                : ""}
        </div>
    )
}

export default UnCheckedTask
