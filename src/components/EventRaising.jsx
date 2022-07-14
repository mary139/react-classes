import React from "react"

function EventRaising({ handleShowGreeting }) {
    return (
        <div>
            <button onClick={handleShowGreeting} >show greeting</button>
        </div>
    )
}

export default EventRaising
