import React from "react"

function Joke(props) {
    return (
        <div className="item">
            <h3 style={{display: !props.question && "none"}} className="qt">{props.question}</h3>
            <h3 style={{color: !props.question && "black"}} className="as">{props.punchLine}</h3>
        </div>
    )
}

export default Joke