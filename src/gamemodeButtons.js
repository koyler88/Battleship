import { singlePlayerGame } from "./singleplayersetup"
import { twoPlayerGame } from "./multiplayer"

export function handleGamemode() {
    const singlePlayerButton = document.querySelector(".single-player")
    const twoPlayerButton = document.querySelector(".two-player")
    twoPlayerButton.classList.add("unavailable")

    singlePlayerButton.addEventListener("click", () => {
        singlePlayerGame()
    })

    // **ADD MULTIPLAYER FUNCTIONALITY**
    // twoPlayerButton.addEventListener("click", () => {
    //     twoPlayerGame()
    // })
}