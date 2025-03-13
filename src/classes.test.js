const modules = require("./classes")

test("Ship Factory Creation", () => {
    const shipLengthFour = {
        length: 4,
        hits: null,
        sunk: false
    }
    expect(new modules.ship(4)).toEqual(shipLengthFour)
})

test("Ship Hit Function", () => {
    const shipLengthFour = new modules.ship(4)
    shipLengthFour.hit()
    expect(shipLengthFour.hits).toBe(1)
})

test("Ship Sunk Function", () => {
    const shipLengthFour = new modules.ship(2)
    shipLengthFour.hit()
    expect(shipLengthFour.isSunk()).toBe(false)
    shipLengthFour.hit()
    expect(shipLengthFour.isSunk()).toBe(true)
})

test("Gameboard Placement Function", () => {
    const gameboard = new modules.gameboard

    gameboard.placeShip([1,7], 3, "v")

    expect(gameboard.board[1][7]).toEqual({
        length: 3,
        hits: null,
        sunk: false
    })
})

test("Gameboard Placement Function extended values", () => {
    const gameboard = new modules.gameboard

    gameboard.placeShip([1,7], 3, "v")

    expect(gameboard.board[2][7]).toEqual({
        length: 3,
        hits: null,
        sunk: false
    })
    expect(gameboard.board[3][7]).toEqual({
        length: 3,
        hits: null,
        sunk: false
    })
})

test("Gameboard Placement Function (horizontal)", () => {
    const gameboard = new modules.gameboard

    gameboard.placeShip([1,7], 3, "h")

    expect(gameboard.board[1][8]).toEqual({
        length: 3,
        hits: null,
        sunk: false
    })
    expect(gameboard.board[1][9]).toEqual({
        length: 3,
        hits: null,
        sunk: false
    })
})



test("Gameboard recieveAttack function (hit)", () => {
    const gameboard = new modules.gameboard

    gameboard.placeShip([1,7], 3, "v")

    expect(gameboard.board[1][7].hits).toBe(null)
    gameboard.receiveAttack([1,7])

    expect(gameboard.board[1][7].hits).toBe(1)
})

test("Gameboard recieveAttack function (miss)", () => {
    const gameboard = new modules.gameboard

    gameboard.receiveAttack([1,7])

    expect(gameboard.board[1][7]).toEqual("miss")

})

test("Gameboard allSunk function (no ships)", () => {
    const gameboard = new modules.gameboard
    expect(gameboard.allSunk()).toBe(true)
})

test("Gameboard allSunk function", () => {
    const gameboard = new modules.gameboard
    gameboard.placeShip([1,7], 3, "v")
    expect(gameboard.allSunk()).toBe(false)
    gameboard.receiveAttack([1,7])
    gameboard.receiveAttack([2,7])
    gameboard.receiveAttack([3,7])

    expect(gameboard.allSunk()).toBe(true)
})

test("Player Creation (user)", () => {
    const player = new modules.player("user")

    expect(player.type).toBe("user")
})

test("Player Creation (computer)", () => {
    const player = new modules.player("computer")

    expect(player.type).toBe("computer")
})

test("Player Creation (has gameboard)", () => {
    const player = new modules.player("user")

    expect(player.board).toBeDefined()
})




