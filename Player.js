const directions = {
    north: 0,
    east: 1,
    south: 2,
    west: 3
}

class Player {
    constructor (id, name, skinId, position) {
        // Player's id
        this.id = id
        // Player's pseudonyme
        this.name = name;
        // Selected Skin ID
        this.skinId = skinId;
        // Player's position at game start
        [this.positionX, this.positionY] = position;

        // Player's level at initialization
        this.lvl = 1;
        // Player's HP at initialisation
        this.hp = 100;
        // Player's max number of HP at initialisation
        this.maxHp = 100;
        // Player's moving speed (u/v per second)
        this.speed = 0.1;

        // Which direction are we in right now ?
        this.direction = directions.south;

        //  Player's attack cooldown (s)
        this.attackCooldown = 2;
        // Player's current attack cooldown
        this.currentAttackCooldown = this.attackCooldown;
        // Is the player attacking right now ?
        this.isAttacking = false;
        // If so, which sprite in the direction attack spritesheet is currently displayed ?
        this.attackSpriteIndex = 0;

        // Is the player walking right now ?
        this.isWalking = false;
        // If so, which sprite in the direction walk spritesheet is currently displayed ?
        this.walkSpriteIndex = 0;

        // Is the player dying right now ?
        this.isDying = false;
        // If so, which sprite in the death spritesheet is currently displayed ?
        this.deathSpriteIndex = 0;
    }

    update(updateData) {
        [this.positionX, this.positionY] = updateData.position;
        this.lvl = updateData.lvl;
        this.hp = updateData.hp;
        this.maxHp = updateData.maxHp;
        this.speed = updateData.speed;
        this.attackCooldown = updateData.attackCooldown;
        this.currentAttackCooldown = updateData.currentAttackCooldown;
    }

    attack() {
        this.isAttacking = true;
    }

    animateAttack() {
        // If player is attacking, choose the right attacking sprite for render
    }

    move(direction) { 
        // Coordinates variations depending on walking direction and speed
        const variations = [
            // North
            [0, this.speed],
            // East
            [this.speed, 0],
            // South
            [0, this.speed * -1],
            // West
            [this.speed * -1, 0]
        ]

        // The player is indeed walking right now
        this.isWalking = true;
        // We'll adapt this later with DOM events
        this.direction = directions.north;

        // Apply variations to current player's location
        this.positionX += variations[this.direction][0];
        this.positionY += variations[this.direction][1];
    }

    animateWalk() {
        // If player is walking, choose the right walking sprite for render
    }

    animateDeath() {
        // If player is dying, choose the right death sprite for render
    }
}
