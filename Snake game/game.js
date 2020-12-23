import {update as updateSnake, draw as drawSnake, Snake_Speed} from './snake'

let lastRenderTime = 0

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / Snake_Speed) return

    lastRenderTime = currentTime
}
window.requestAnimationFrame(main);

function update () {
    updateSnake
}

function draw() {
    drawSnake
}