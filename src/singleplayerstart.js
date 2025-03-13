import { displayBoard } from "./displayBoard"
const classes = require("./classes")
import { randomPlacements } from "./randomplacements"

const computerBoard = new classes.gameboard()


export function startSinglePlayerGame(playerGameboard) {
    window.alert = function() {}
    const title = document.querySelector(".title")
    while (title.firstChild) {
        title.removeChild(title.lastChild)
    }
    title.textContent = "Battleship"
    const message = document.createElement("div")
    message.textContent = "Click to fire"
    message.classList.add("message")
    title.appendChild(message)


    const gridOne = document.querySelector(".grid-one")
    while (gridOne.firstChild) {
        gridOne.removeChild(gridOne.lastChild)
    }
    displayBoard(playerGameboard, "one")

    const gridContainer = document.querySelector(".grid-container")
    gridContainer.removeChild(gridContainer.lastChild)
    const gridTwo = document.createElement("div")
    gridTwo.classList.add("grid-two")
    gridContainer.appendChild(gridTwo)

    randomPlacements(computerBoard)
    displayBoard(computerBoard, "two", "cpu")

    const playerLabel = document.createElement("div")
    playerLabel.classList.add("player-label")
    playerLabel.textContent = "You"
    const computerLabel = document.createElement("div")
    computerLabel.classList.add("enemy-label", "unclickable")
    computerLabel.textContent = "Enemy"
    gridOne.appendChild(playerLabel)
    gridTwo.appendChild(computerLabel)

    gridOne.classList.add("zhide")

    if (playerGameboard.allSunk()) {
        message.textContent = "GAME OVER! YOU LOSE!"
    } else {
        playerTurn(playerGameboard)
    }
    


}

function playerTurn(playerGameboard) {
    const gridTwo = document.querySelector(".grid-two")
    gridTwo.addEventListener("click", (e) => {
        if (!e.target.classList.contains("cell")) {
            playerTurn(playerGameboard)
        } else {
            if (e.target.classList.contains("hit")) {
                playerTurn(playerGameboard)
            } else {
                const row = e.target.parentNode.dataset.index
                const cell = e.target.dataset.index
    
                const cellDiv = e.target
    
                if (computerBoard.board[row][cell] === null) {
                    cellDiv.className = "cell empty hit empty-hit"
                    const dot = document.createElement("span")
                    dot.classList.add("dot", "unclickable")
                    cellDiv.appendChild(dot)
                    computerTurn(playerGameboard)
                } else {
                    computerBoard.board[row][cell].hit()
                    cellDiv.className = "cell ship hit ship-hit"
                    const redX = document.createElement("span")
                    redX.classList.add("red-x", "unclickable")
                    redX.textContent = "X"
                    cellDiv.appendChild(redX)
                    if (computerBoard.allSunk()) {
                        const message = document.querySelector(".message")
                        message.textContent = "GAME OVER! YOU WIN!!!"
                        toggleButtons()
                    } else {
                        computerTurn(playerGameboard)
                    }
                }
            }
        }
        


    }, {once: true})
}

function computerTurn(playerGameboard) {
    let row = Math.floor(Math.random() * 10)
    let cell = Math.floor(Math.random() * 10)


    let rowDiv = document.querySelector(`.row[data-index="${row}"]`)
    let cellDiv = rowDiv.querySelector(`[data-index="${cell}"]`)
    if (cellDiv.classList.contains("hit")) {
        computerTurn(playerGameboard)
    } else {
        if (playerGameboard.board[row][cell] === null) {
            cellDiv.className = "cell empty hit empty-hit"
            const dot = document.createElement("span")
            dot.classList.add("dot")
            cellDiv.appendChild(dot)
            playerTurn(playerGameboard)
        } else {
            playerGameboard.board[row][cell].hit()
            cellDiv.className = "cell ship hit ship-hit"
            const redX = document.createElement("span")
            redX.classList.add("red-x")
            redX.textContent = "X"
            cellDiv.appendChild(redX)
            console.log(playerGameboard)
            if (playerGameboard.allSunk()) {
                const message = document.querySelector(".message")
                message.textContent = "GAME OVER! YOU LOSE!"
                toggleButtons()
            } else {
                playerTurn(playerGameboard)
            }
        }
    }
}

function toggleButtons() {
    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("button-container")
    const title = document.querySelector(".title")
    title.appendChild(buttonContainer)
    const mainMenuButton = document.createElement("button")
    mainMenuButton.textContent = "Main Menu"
    buttonContainer.append(mainMenuButton)

    mainMenuButton.addEventListener("click", () => {
        window.location.reload()
    })
}