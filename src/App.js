import React, { useState } from "react"
import { nanoid } from "nanoid"

import Die from "./Die"

export default function App() {

    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let index = 0; index < 10; index++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function rollDice() {
        setDice(allNewDice())
    }

    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} />
    ))

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-dice">Roll</button>
        </main>
    )
}