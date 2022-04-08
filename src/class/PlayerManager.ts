import { Player } from "./Player"

export class PlayerManager {
    players = new Array()
    constructor() {
        // TODO Load json file to startup
    }
    addPlayer(player : Player) {
        this.players.push(player)
    }
    
}