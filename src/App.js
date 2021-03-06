import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

import Die from "./Die"

export default function App() {

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const [score, setScore] = useState(1)
    const [highScore, setHighScore] = useState(JSON.parse(localStorage.getItem("highscore")) == null ? 9999 : JSON.parse(localStorage.getItem("highscore")))

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld & allSameValue) {
            setTenzies(true)
            if (score < highScore) {
                setHighScore(score)
            }
        }
        console.log(highScore)
    }, [dice, highScore, score])

    useEffect(() => {
        localStorage.setItem("highscore", JSON.stringify(highScore))
    }, [highScore])

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
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die :
                    generateNewDie()
            }))
        } else {
            setScore(0)
            console.log("new game")
            setTenzies(false)
            setDice(allNewDice())
        }

        setScore(score + 1)
        if (tenzies && score !== 0) {
            setScore(1)
        }
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
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze
                it at its current value between rolls.</p>
            <p className="score">You rolled the dice <span>{score}</span> times</p>
            <div className="dice-container">
                {diceElements}
            </div>
            {JSON.parse(localStorage.getItem("highscore")) === 9999 ?
                <></> :
                <p className="score">
                    Your best score is: {highScore ? JSON.parse(localStorage.getItem("highscore")) : score}
                </p>}
            <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}