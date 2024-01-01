import React from "react"
import { IoMdAddCircle } from "react-icons/io"
const Add = ({ specifier, functionName }) => {
    return (
        <div>
            <h5>Add {specifier}</h5>
            <IoMdAddCircle onClick={() => functionName()} />
        </div>
    )
}

export default Add
