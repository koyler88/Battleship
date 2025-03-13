export function handleClick() {
    const githubImage = document.querySelector(".github-image")

    githubImage.addEventListener("click", () => {
        window.location.href = 'https://github.com/koyler88/Battleship'
    })
}


