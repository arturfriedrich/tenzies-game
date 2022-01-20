import React, { useState } from "react"

import Die from "./Die"

export default function App() {

    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let index = 0; index < 10; index++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }

    const diceElements = dice.map(die => <Die value={die} />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
        </main>
    )
}