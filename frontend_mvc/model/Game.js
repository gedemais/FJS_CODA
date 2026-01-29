import Player from "./Player.js"
import { directions } from "./Player.js"

export default class Game {
    constructor() {
        // Map is a well-optimized alternative to classical objects, useful to store objects by ID
        this.players = new Map();
        // Is the game running right now ?
        this.isRunning = false;
        // Is the game over right now ?
        this.isOver = false;
        // For how long did the game run right now ?
        this.timer = 0;
    }


    update(gameStateFromServer) {
        // Update meta data about the ongoing game from data sent by the backend
        this.isRunning = gameStateFromServer.isRunning;
        this.isOver = gameStateFromServer.isOver;
        this.timer = gameStateFromServer.timer;

        // Extract players data object from backend response
        // This object contains objects representing players
        const serverPlayers = gameStateFromServer.players;

        // Iterate on all received players
        // Here id is the key associated to the currently iterated player's data
        for (const id in serverPlayers) {
            // Store player's data
            const data = serverPlayers[id];

            // If the player is present in our players collection
            if (this.players.has(id)) {
                // We select it with get (we could also do it with brackets syntax)
                let player = this.players.get(id);
                // And we launch its update method with the data received about him
                // This call will synchronize player's data between the backend and the frontend
                player.update(data);
            } else { // Else, e.g if the player does not exist in front yet
                // We create it by instantiating the class Player
                const p = new Player(
                    id,
                    data.name, // Name, skinPath and position are dictated by the backend and retrieved in data here
                    data.skinPath,
                    data.position
                );
                // And we launch its update method with the data received about him
                // This call will synchronize player's data between the backend and the frontend
                p.update(data);
                // Then we store it into our collection under the "id" key.
                this.players.set(id, p);
            }
        }

        // Let's assume our front may still have outdated players at some point
        this.players.forEach((_, id) => {
            // If the backend don't send them anymore ;
            if (!serverPlayers[id]) {
                // We delete them from our collection
                this.players.delete(id);
            }
        });
    }
}

// export default Game;