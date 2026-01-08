class GameView {
    constructor(canvasId, game) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.game = game;

        // World scale
        this.scale = 50; // 1 unité = 50px
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render() {
        this.clear();

        // Draw background
        this.drawBackground();

        // Draw players
        this.game.players.forEach(player => {
            this.drawPlayer(player);
            this.drawHpBar(player);
            this.drawPlayerName(player);
        });
    }

    drawBackground() {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawPlayer(player) {
        const x = player.positionX * this.scale;
        const y = player.positionY * this.scale;

        // Temporary representation
        this.ctx.fillStyle = "blue";
        this.ctx.beginPath();
        this.ctx.arc(x, y, 15, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawHpBar(player) {
        const x = player.positionX * this.scale;
        const y = player.positionY * this.scale - 25;

        const barWidth = 30;
        const barHeight = 5;
        const ratio = player.hp / player.maxHp;

        // Background
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(x - barWidth / 2, y, barWidth, barHeight);

        // HP
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(
            x - barWidth / 2,
            y,
            barWidth * ratio,
            barHeight
        );
    }

    drawPlayerName(player) {
        const x = player.positionX * this.scale;
        const y = player.positionY * this.scale - 35;

        this.ctx.fillStyle = "black";
        this.ctx.font = "10px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            `${player.name} (lvl ${player.lvl})`,
            x,
            y
        );
    }
}
