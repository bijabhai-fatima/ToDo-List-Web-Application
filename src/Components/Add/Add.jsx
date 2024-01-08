import React from "react"
import AddIcon from "../../add.png"
import AddIcon2 from "../../add2.png"
import "./Add.css"
const Add = ({ specifier, functionName }) => {
    return (
        <div className={specifier}>
            {/* <img src={AddIcon}  /> */}
            {specifier.includes("task") ? (
                <div>
                    <div className="The-Line" />
                    <img
                        src={AddIcon2}
                        alt="add icon"
                        onClick={() => functionName()}
                    />
                    <div className="The-Line" />
                </div>
            ) : (
                <img
                    src={AddIcon}
                    alt="add icon"
                    onClick={() => functionName()}
                />
            )}
        </div>
    )
}

export default Add
