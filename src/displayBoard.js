export function displayBoard(gameboard, playerNum, user = null) {
    const grid = document.querySelector(`.grid-${playerNum}`)
    while(grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
    let x = 0
    let y = 0

    gameboard.board.forEach((array) => {
        const newDiv = document.createElement("div")
        newDiv.dataset.index = x
        x += 1
        newDiv.classList.add("row")
        array.forEach((element) => {
            const elementDiv = document.createElement("div")
            elementDiv.classList.add("cell")
            elementDiv.dataset.index = y
            y += 1
            if (element === null) {
                elementDiv.classList.add("empty")
            } else {
                if (user === "cpu") {
                    elementDiv.classList.add("hidden-ship")
                } else {
                    elementDiv.classList.add("ship")
                }
                
            }
            newDiv.appendChild(elementDiv)
        })
        y = 0
        grid.appendChild(newDiv)
    })
}