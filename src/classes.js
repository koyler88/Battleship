class Ship {
    constructor(length) {
        this.length = length
        this.hits = null
        this.sunk = false
    }

    hit() {
        this.hits += 1
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
        this.board = [[[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]], [[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]]]
    }

    placeShip([x,y], length, direction = null) {
        const ship = new Ship(length)
        if (direction === "v") {
            for (let i = 0; i < length; i++) {
                this.board[x][y-i]
            }
        } else {
            for (let i = 0; i < length; i++) {
                this.board[x+i][y] = ship
            }
        }
        
    }

    receiveAttack([x,y]) {
        if (this.board[x][y][0] === null) {
            this.board[x][y] = ["miss"]
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
                if (element.sunk === false) allSunk = false;
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