class Game {
    constructor() {
        this.players = new Map();
        this.isRunning = false;
        this.timer = 0;
    }

    addPlayer(player) {
        this.players.set(player.id, player);
    }

    removePlayer(playerid) {
        this.players.delete(playerid);
    }

    update(gameStateFromServer) {
        // Update isRunning boolean
        this.isRunning = gameStateFromServer.isRunning;
        // Update game's timer
        this.timer = gameStateFromServer.timer;
        // Get players data
        const serverPlayers = gameStateFromServer.players;
        // Iterate on the keys of server data
        for (const id in serverPlayers) {
            // Get player's data
            const playerData = serverPlayers[id];

            // If the player is present in our Game model
            if (this.players.has(id)) {
                // Then we update its data with the received data
                players[id].update(playerData);
            } else {
                // New player in the game -> create it properly
                const newPlayer = new Player(
                    id,
                    playerData.name,
                    playerData.skinId,
                    playerData.position
                );
                // And then store it into our Game model players list
                this.players.set(id, newPlayer);
            }
        }

        // Delete dead / disconnected players
        // Iterate on the players present in our Game model
        this.players.forEach((_, id) => {
            // If the player in our Game model does not exist anymore in the received data
            if (!serverPlayers[id]) {
                // Then we delete it from our Game model
                this.players.delete(id);
            }
        });
    }
}
