const game = new Game();
const view = new GameView("gameCanvas", game);

setInterval(async () => {
    const res = await fetch("/game-state");
    const data = await res.json();
    game.update(data);
}, 100);

function loop() {
    view.render();
    requestAnimationFrame(loop);
}

loop();
