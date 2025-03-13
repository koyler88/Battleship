export function randomPlacements(board) {
    placeRandomShip(board, 4)
    placeRandomShip(board, 3)
    placeRandomShip(board, 3)
    placeRandomShip(board, 2)
    placeRandomShip(board, 2)
    placeRandomShip(board, 2)
    placeRandomShip(board, 1)
    placeRandomShip(board, 1)
    placeRandomShip(board, 1)
    placeRandomShip(board, 1)


}

function placeRandomShip(board, length) {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    let direction = null;

    let randomZeroOrOne = Math.floor(Math.random() * 2) + 1;

    if (randomZeroOrOne === 1) {
        direction = "h"
    } else {
        direction = null;
    }

    if (board.board[x][y] === null) {
        if (board.placeShip([x,y], length, direction)) {
            board.placeShip([x,y], length, direction)
        } else {
            placeRandomShip(board, length)
        }
    } else {
        placeRandomShip(board, length)
    }
}