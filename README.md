# Tenzies game

*Roll until all dice are the same. Click each die to freeze it at its current value between rolls.*

Learning **useState** and **UseEffect** React Hooks.


## Overview

### The Goal

User should be able to:

-   [x] Play the game
-   [x] Track personal high score
-   [x] Play both on mobile and Desktop

### Website to the current version

[Website](arturfriedrich.github.io/tenzies-game/)

## Screenshot

![screenshot of the game](https://user-images.githubusercontent.com/67378210/151420275-b9c71b3d-8149-495f-ae2e-348f9fda762e.png)

## My process

### Built with

-   React
-   HTML markup
-   CSS
-   Javascript

### What I learned

-   How to control **state** across components
-   Save data to **localStorage**
-   Using React.useState



```jsx
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
    }, [dice, highScore, score])
```


## Installation

Clone this repository and install the dependencies...

```bash
npm install react-confetti
```

To run locally then start [Rollup](https://rollupjs.org)

```bash
npm run dev
```

## Author

-   GitHub - [@arturfriedrich](https://www.github.com/arturfriedrich)
-   Twitter - [@arturfriedrich7](https://twitter.com/arturfriedrich7)

## Acknowledgements

-   [Scrimba](https://scrimba.com) - The base app is from a tutorial





