import { directions } from "../model/Player.js";

const skinPaths = [];
for (let i = 1; i < 30; i++) {
    skinPaths.push(`assets/${i}.png`);
}

// Adaptation aux sprites d'attaque de 128x128

const maudits = [7, 13, 18, 21, 24, 26, 29];    

const paths_maudits = [];

for (let maudit in maudits) {
    paths_maudits.push(`assets/${maudit}.png`);
}

//////////////////////////////////////////////////////

export default class GameView {
    constructor(game) {
        // Retrieve the canvas element used for rendering the game
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.xScale = this.canvas.width;
        this.yScale = this.canvas.height;

        this.game = game;

        // Load spritesheet
        this.walkSpriteSize = 64;
        this.deathSpriteSize = 64;
        this.attackSpriteSize = 192;

        this.spriteSheets = {}
        // Preload all existing spritesheets
        skinPaths.forEach((path) => {
            this.spriteSheets[path] = new Image();
            this.spriteSheets[path].src = path;
        });

        this.background = new Image();
        this.background.src = "assets/back9.jpg";
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
            if (player.isDead === false) {
            this.drawPlayer(player);
            this.drawHpBar(player);
            this.drawCooldownBar(player);
            this.drawPlayerName(player);
            }
        });
        this.drawTimer();
    }

    drawBackground() {
        //this.ctx.fillStyle = "#ffffff";
        //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.background, 0, 0, this.background.width, this.background.height, 0, 0, this.canvas.width, this.canvas.height);
    }

    drawTimer() {
        const minutes = this.game.timer / 60;
        const seconds = this.game.timer % 60.0;

        let str = minutes.toFixed(0);
        str += ":";
        if (seconds < 10) {
            str += "0";
        }
        str += seconds.toFixed(2);

        if (minutes === 0.0 && seconds === 0.0) {
            str = "Waiting for players...";
        } 

        //console.log(str);

        this.ctx.fillStyle = "black";
        this.ctx.font = "24px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            str,
            400,
            50
        );
    }


    getDeathLine() {
        return 20;
    }

    getWalkLine(direction) {
        switch (direction) {
            case directions.north: return 8;
            case directions.west: return 9;
            case directions.south: return 10;
            case directions.east: return 11;
            default: return 10;
        }
    }


    getAttackLineCoords (direction, small) {

        switch (direction) {
            case directions.north: return small ? 3456 : 3456;
            case directions.west: return small ? 3584 : 3648;
            case directions.south: return small ? 3712 : 3840;
            case directions.east: return small ? 3840 : 4032;
            default: return 0;
        }
    }

    drawPlayer(player) {

        const x = player.renderX * this.xScale;
        const y = player.renderY * this.yScale;

        let sx;
        let sy;
        let spriteSize;

        if (player.isAttacking) {
            const frame = player.attackSpriteIndex;
            let small = false;
            spriteSize = 192;

            // //console.log(player.skinPath);
            if (!paths_maudits.includes(player.skinPath)) {
                spriteSize = 128;
                small = true;
            }

            sx = frame * spriteSize;
            sy = this.getAttackLineCoords(player.direction, small);

            //console.log(sx, sy, spriteSize);
        }
        else if (player.isDying) {
            const frame = player.deathSpriteIndex;
            const line = this.getDeathLine();

            sx = frame * this.deathSpriteSize;
            sy = line * this.deathSpriteSize;
            spriteSize = this.deathSpriteSize;
        }
        else
        {
            const frame = player.walkSpriteIndex;

            const line = this.getWalkLine(player.direction);

            sx = frame * this.walkSpriteSize;
            sy = line * this.walkSpriteSize;
            spriteSize = this.walkSpriteSize;
        }

        //if (small === true) {
        console.log(this.spriteSheets[player.skinPath],
            sx, sy,                       // Source X, Y
            spriteSize, spriteSize,
            x - spriteSize / 2,      // Center player
            y - spriteSize / 2,
            spriteSize,
            spriteSize);
        //}


        this.ctx.drawImage(
            this.spriteSheets[player.skinPath],
            sx, sy,                       // Source X, Y
            spriteSize, spriteSize,
            x - spriteSize / 2,      // Center player
            y - spriteSize / 2,
            spriteSize,
            spriteSize
        );
    }


    drawHpBar(player) {
        const x = player.renderX * this.xScale;
        const y = player.renderY * this.yScale - 30;

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

    drawCooldownBar(player) {
        const x = player.renderX * this.xScale;
        const y = player.renderY * this.yScale - 22;

        const barWidth = 30;
        const barHeight = 5;
        const ratio = player.currentAttackCooldown / player.attackCooldown;

        // Background
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(x - barWidth / 2, y, barWidth, barHeight);

        // HP
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(
            x - barWidth / 2,
            y,
            barWidth * ratio,
            barHeight
        );
    }


    drawPlayerName(player) {
        const x = player.renderX * this.xScale;
        const y = player.renderY * this.yScale - 35;

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
