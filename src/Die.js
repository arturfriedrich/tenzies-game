import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59e391" : "white"
    }

    function handleClick() {
        props.holdDice(props.id)
    }

    return (
        <div className="die-face" style={styles} onClick={handleClick}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

