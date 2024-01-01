import React, { useEffect, useContext } from "react"
import { AppContext } from "../../AppContext"

function CheckedTask() {
    const { currentList, currentUser } = useContext(AppContext)
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
                                      <input type="checkbox" checked disabled />
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
