import React, { useEffect, useContext } from "react"
import { AppContext } from "../../AppContext"
import { FaCheck } from "react-icons/fa"

function CheckedTask() {
    useEffect(() => {
        console.log("checked render")
        console.log("your currnt user... ", currentUser)
        console.log("your currnt list... ", currentList)
        console.log("your current task.... ", currentTask)
    }, [])

    const { currentList, currentUser, currentTask } = useContext(AppContext)
    useEffect(() => {
        console.log("r2")
    }, [currentList])
    return (
        <div>
            {currentList.items.length > 0
                ? currentList.items.map((item, index) =>
                      item.status ? (
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <div class="input-group-text">
                                      <FaCheck />
                                  </div>
                              </div>
                              <del class="form-control">{item.task}</del>
                          </div>
                      ) : (
                          ""
                      )
                  )
                : ""}
        </div>
    )
}

export default CheckedTask
