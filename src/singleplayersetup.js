const classes = require("./classes")
import { displayBoard } from "./displayBoard"
import { startSinglePlayerGame } from "./singleplayerstart"


export function singlePlayerGame() {
    // Clear welcome info
    const title = document.querySelector(".title")
    const arrows = document.querySelector(".arrows")
    arrows.remove()
    const gamemodeButtons = document.querySelector(".gamemode-buttons")
    gamemodeButtons.remove()
    const message = document.querySelector(".message")
    message.textContent = 'Place your ships (click to rotate)'
    // Button Container
    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("button-container")
    title.appendChild(buttonContainer)
    const resetBtn = document.createElement("button")
    resetBtn.textContent = "reset"
    resetBtn.classList.add("reset")
    buttonContainer.appendChild(resetBtn)

    // Start Button
    const startBtn = document.createElement("button")
    startBtn.textContent = "Start Game"
    startBtn.classList.add("start")
    startBtn.classList.add("hidden")
    buttonContainer.appendChild(startBtn)

    startBtn.addEventListener("click", () => {
        startSinglePlayerGame(playerOneBoard)
    })
    // Reset Button
    resetBtn.addEventListener("click", () => {
        startBtn.classList.add("hidden")
        // Create fresh player board
        playerOneBoard = new classes.gameboard()
        // Remove old board
        while (gridOne.firstChild) {
            gridOne.removeChild(gridOne.lastChild)
        }
        displayBoard(playerOneBoard, "one")
        // Remove old ship drag display
        while (shipContainer.firstChild) {
            shipContainer.removeChild(shipContainer.lastChild)
        }
        // Append new display ships
        shipContainer.appendChild(shipL4.cloneNode(true))
        shipContainer.appendChild(shipL3.cloneNode(true))
        shipContainer.appendChild(shipL3.cloneNode(true))
        shipContainer.appendChild(shipL2.cloneNode(true))
        shipContainer.appendChild(shipL2.cloneNode(true))
        shipContainer.appendChild(shipL2.cloneNode(true))
        shipContainer.appendChild(shipL1.cloneNode(true))
        shipContainer.appendChild(shipL1.cloneNode(true))
        shipContainer.appendChild(shipL1.cloneNode(true))
        shipContainer.appendChild(shipL1.cloneNode(true))

        // Display Ship event listener
        let displayShips = document.querySelectorAll(".display-ship")
        displayShips.forEach((ship) => {
            ship.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("length", ship.dataset.length)
                if (ship.classList.contains("verticle")) {
                    e.dataTransfer.setData("direction", "v")
                } else {
                    e.dataTransfer.setData("direction", "h")
                }
                e.target.draggable = false;
                e.target.classList.add("faded")
                console.log("test")
            }, {once: true});
        ship.addEventListener("click", (e) => {
            e.target.parentNode.classList.toggle("verticle")
        })
    })

    })


    let playerOneBoard = new classes.gameboard()

    const gridContainer = document.querySelector(".grid-container")
    const gridOne = document.createElement("div")
    gridOne.classList.add("grid-one")
    gridContainer.appendChild(gridOne)

    gridOne.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (e.target.className === "grid-one") {

        } else {
            e.target.style.border = "1px solid red"
        }
    })
    gridOne.addEventListener("dragleave", (e) => {
        e.preventDefault();
        if (e.target.className === "grid-one") {

        } else {
            e.target.style.border = "1px solid black"
        }
    })
    gridOne.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.target.className === "grid-one") {

        } else {
            e.target.style.border = "1px solid peru"
            let x = parseInt(e.target.parentNode.dataset.index)
            let y = parseInt(e.target.dataset.index)
            let length = e.dataTransfer.getData("length")
            let direction = e.dataTransfer.getData("direction")
            playerOneBoard.placeShip([x,y], length, direction)
            displayBoard(playerOneBoard, "one")
            if (!document.querySelector('[draggable="true"')) {
                startBtn.classList.remove("hidden")
            }
        }
    })



    displayBoard(playerOneBoard, "one")

  
    const shipContainer = document.createElement("div")
    shipContainer.classList.add("ship-container")
    gridContainer.appendChild(shipContainer)

    const shipCell = document.createElement("div")
    shipCell.classList.add("display-cell", "ship")
    const shipL4 = document.createElement("div")
    shipL4.classList.add("display-ship")
    shipL4.draggable = true;
    shipL4.dataset.length = 4
    shipL4.appendChild(shipCell.cloneNode(true))
    shipL4.appendChild(shipCell.cloneNode(true))
    shipL4.appendChild(shipCell.cloneNode(true))
    shipL4.appendChild(shipCell.cloneNode(true))

    const shipL3 = document.createElement("div")
    shipL3.classList.add("display-ship")
    shipL3.draggable = true;
    shipL3.dataset.length = 3
    shipL3.appendChild(shipCell.cloneNode(true))
    shipL3.appendChild(shipCell.cloneNode(true))
    shipL3.appendChild(shipCell.cloneNode(true))

    const shipL2 = document.createElement("div")
    shipL2.classList.add("display-ship")
    shipL2.draggable = true;
    shipL2.dataset.length = 2
    shipL2.appendChild(shipCell.cloneNode(true))
    shipL2.appendChild(shipCell.cloneNode(true))

    const shipL1 = document.createElement("div")
    shipL1.classList.add("display-ship")
    shipL1.draggable = true;
    shipL1.dataset.length = 1
    shipL1.appendChild(shipCell.cloneNode(true))


    shipContainer.appendChild(shipL4.cloneNode(true))
    shipContainer.appendChild(shipL3.cloneNode(true))
    shipContainer.appendChild(shipL3.cloneNode(true))
    shipContainer.appendChild(shipL2.cloneNode(true))
    shipContainer.appendChild(shipL2.cloneNode(true))
    shipContainer.appendChild(shipL2.cloneNode(true))
    shipContainer.appendChild(shipL1.cloneNode(true))
    shipContainer.appendChild(shipL1.cloneNode(true))
    shipContainer.appendChild(shipL1.cloneNode(true))
    shipContainer.appendChild(shipL1.cloneNode(true))



    let displayShips = document.querySelectorAll(".display-ship")
    displayShips.forEach((ship) => {
        ship.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("length", ship.dataset.length)
            if (ship.classList.contains("verticle")) {
                e.dataTransfer.setData("direction", "v")
            } else {
                e.dataTransfer.setData("direction", "h")
            }
            e.target.draggable = false;
            e.target.classList.add("faded")
        }, {once: true});
        ship.addEventListener("click", (e) => {
            e.target.parentNode.classList.toggle("verticle")
        })
    })
}