const classes = require("./classes")
import { displayBoard } from "./displayBoard"

export function twoPlayerGame() {
    // clear page (besides Title & Footer)
    const arrows = document.querySelector(".arrows")
    arrows.remove()
    const gamemodeButtons = document.querySelector(".gamemode-buttons")
    gamemodeButtons.remove()
    const message = document.querySelector(".message")
    message.textContent = "Player one --- Place your ships"

    const playerOneBoard = new classes.gameboard()
    
        const gridContainer = document.querySelector(".grid-container")
        const gridOne = document.createElement("div")
        gridOne.classList.add("grid-one")
        gridContainer.appendChild(gridOne)
    
    
        displayBoard(playerOneBoard, "one")
}