import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"

function UnCheckedTask() {
    const { currentList, currentUser, currentTask, setCurrentTask } =
        useContext(AppContext)
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
                                      <input
                                          type="checkbox"
                                          onClick={() => {
                                              item.status = true
                                              setCurrentTask(item)
                                          }}
                                      />
                                  </div>
                              </div>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder={item.task}
                                  onClick={() => setCurrentTask(item)}
                                  onBlur={(e) =>
                                      (currentTask.task = e.target.value)
                                  }
                              />
                          </div>
                      )
                  )
                : ""}
        </div>
    )
}

export default UnCheckedTask
