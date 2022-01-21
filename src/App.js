import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Die from "./Die"

export default function App() {

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        console.log("the state changed")
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }


    function allNewDice() {
        const newDice = []
        for (let index = 0; index < 10; index++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ?
                die :
                generateNewDie()
        }))
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        }))
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            id={die.id}
            holdDice={() => holdDice(die.id)}
        />
    ))

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze
                it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-dice">Roll</button>
        </main>
    )
}