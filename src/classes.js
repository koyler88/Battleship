class Ship {
    constructor(length) {
        this.length = parseInt(length)
        this.hits = null
        this.sunk = false
    }

    hit() {
        this.hits += 1
        this.isSunk()
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
        }
        return this.sunk
    }
}

class Gameboard {
    constructor() {
        this.board = [[null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null,null]]
    }

    placeShip([x,y], length, direction = null) {
        if (this.board[x][y] !== null) {
            alert("Cannot overlap ships")
            return false;
        }
        if (direction === "h") {
            if (y + (length - 1) > 9 || y < 0 || x > 9 || x < 0) {
                alert("Invalid Placement")
                return false;
            } else {
                if (this.board[x][y + (length - 1)] !== null) {
                    alert("Cannot overlap ships")
                    return false;
                } else {
                    const ship = new Ship(length)
                    for (let i = 0; i < length; i++) {
                        this.board[x][y+i] = ship
                    }
                    return true;
                }
                
            }
        }
        if (direction === "v") {
            if (x + (length - 1) > 9 || x < 0 || y < 0 || y > 9) {
                alert("Invalid Placement")
                return false;
            } else {
                if (this.board[x + (length - 1)][y] !== null) {
                    alert("Cannot overlap ships")
                    return false;
                } else {
                    const ship = new Ship(length)
                    for (let i = 0; i < length; i++) {
                        this.board[x+i][y] = ship
                    }
                    return true;
                }
            }
        }
        
        
    }

    receiveAttack([x,y]) {
        if (this.board[x][y] === null) {
            this.board[x][y] = "miss"
            return "miss"
        } else {
            this.board[x][y].hit()
            this.board[x][y].isSunk()
            return "hit"
        }
    }

    allSunk() {
        let allSunk = true
        this.board.forEach((array) => {
            array.forEach((element) => {
                if (element !== null) {
                    if (element.sunk === false) {
                        allSunk = false
                    }
                }
            })
        })
        return allSunk
    }


}

class Player {
    constructor(type) {
        this.type = type
        this.board = new Gameboard()
    }


}

module.exports = {
    ship: Ship,
    gameboard: Gameboard,
    player: Player
}