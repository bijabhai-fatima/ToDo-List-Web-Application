import React, { useEffect, useContext } from "react"
import { AppContext } from "../../AppContext"
import checkIcon from "../../check.png"
import deleteIcon from "../../delete.png"
import "./CheckedTask.css"

function CheckedTask() {
    useEffect(() => {
        console.log("checked render")
        console.log("your currnt user... ", currentUser)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [])

    const { currentList, currentUser, currentTask, deleteTask } =
        useContext(AppContext)
    useEffect(() => {
        console.log("r2")
    }, [currentList])
    return (
        <div>
            <div className="checked-container">
                {currentList.items.length > 0
                    ? currentList.items.map((item, index) =>
                          item.status ? (
                              <div className="checked-content-container">
                                  <div>
                                      <div className="cheked-content-check-icon-container">
                                          <img
                                              src={checkIcon}
                                              alt="check icon"
                                          />
                                      </div>
                                      <div className="cheked-content-text-container">
                                          <input
                                              type="text"
                                              class="checked-text"
                                              placeholder={item.task}
                                              disabled
                                          />
                                      </div>
                                  </div>
                                  <div className="cheked-content-delete-icon-container">
                                      <img
                                          src={deleteIcon}
                                          alt="delete icon"
                                          onClick={() => {
                                              deleteTask(item)
                                          }}
                                      />
                                  </div>
                              </div>
                          ) : (
                              ""
                          )
                      )
                    : ""}
            </div>
        </div>
    )
}

export default CheckedTask
