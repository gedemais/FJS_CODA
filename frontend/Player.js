const directions = {
    north: 0,
    east: 1,
    south: 2,
    west: 3
}

class Player {
    constructor(id, name, skinPath, position) {
        this.id = id;
        this.name = name;
        this.skinPath = skinPath;

        // --- SERVER positions ---
        this.serverX = position[0];
        this.serverY = position[1];

        this.prevServerX = position[0];
        this.prevServerY = position[1];

        // --- RENDER positions ---
        this.renderX = position[0];
        this.renderY = position[1];

        // --- Stats ---
        this.lvl = 1;
        this.hp = 100;
        this.maxHp = 100;
        this.speed = 0.2;

        // --- Direction & states ---
        this.direction = directions.south;
        this.isWalking = false;
        this.isAttacking = false;
        this.isDying = false;
        this.isDead = false;

        // --- Animations (remains non affected by server updates, only concernes frontend logic) ---
        this.walkSpriteIndex = 0;
        this.walkSpritesNumber = 9;
        this.currentWalkSpriteStep = 0;
        this.walkSpriteDuration = 3;

        this.attackSpriteIndex = 0;
        this.attackSpritesNumber = 6;
        this.currentAttackSpriteStep = 0;
        this.attackSpriteDuration = 1;

        this.deathSpriteIndex = 0;
        this.deathSpritesNumber = 6;
        this.currentDeathSpriteStep = 0;
        this.deathSpriteDuration = 5;
    }

    update(updateData) {

        // Save previous server position
        this.prevServerX = this.serverX;
        this.prevServerY = this.serverY;

        // Update authoritative position
        [this.serverX, this.serverY] = updateData.position;

        // Update stats
        this.name = updateData.name
        this.lvl = updateData.lvl;
        this.hp = updateData.hp;
        this.maxHp = updateData.maxHp;
        this.attackCooldown = updateData.attackCooldown;
        this.currentAttackCooldown = updateData.currentAttackCooldown;
        this.speed = updateData.speed;

        this.walkSpriteDuration = 1 / updateData.speed;

        this.direction = updateData.direction;
        this.isAttacking = updateData.isAttacking;
        this.isWalking = updateData.isWalking;
        this.isDying = updateData.isDying;
        this.skinPath = updateData.skinPath;

        //console.log(this.isDead);
    }

    interpolate(alpha) {
        this.renderX =
            this.prevServerX +
            (this.serverX - this.prevServerX) * alpha;

        this.renderY =
            this.prevServerY +
            (this.serverY - this.prevServerY) * alpha;
    }

    animate() {
        // The player is dying
        if (this.isDying || this.currentDeathSpriteStep > 0 || this.deathSpriteIndex > 0) {
            this.currentDeathSpriteStep++;
            if (this.currentDeathSpriteStep >= this.deathSpriteDuration) {
                this.currentDeathSpriteStep = 0;
                this.deathSpriteIndex++;
            }
            if (this.deathSpriteIndex >= this.deathSpritesNumber) {
                this.isDead = true;
            }
        }
        // The player is walking
        else if (this.isWalking) {

            this.attackSpriteIndex = 0;
            this.currentAttackSpriteStep = 0;

            this.currentWalkSpriteStep++;
            if (this.currentWalkSpriteStep >= this.walkSpriteDuration) {
                this.currentWalkSpriteStep = 0;
                this.walkSpriteIndex++;
            }
            if (this.walkSpriteIndex >= this.walkSpritesNumber) {
                this.walkSpriteIndex = 0;
            }
        }
        // The player is attacking
        else if (this.isAttacking || this.currentAttackSpriteStep > 0 || this.attackSpriteIndex > 0) {
            this.currentWalkSpriteStep = 0;
            this.walkSpriteIndex = 0;
            
            this.currentAttackSpriteStep++;
            if (this.currentAttackSpriteStep >= this.attackSpriteDuration) {
                this.currentAttackSpriteStep = 0;
                this.attackSpriteIndex++;
            }
            if (this.attackSpriteIndex >= this.attackSpritesNumber){
                this.attackSpriteIndex = 0;
            }
        }
        // The player is idle
        else {
            this.walkSpriteIndex = 0;
        }
    }
}
