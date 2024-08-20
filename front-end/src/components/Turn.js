import Deal from "../components/Deal";

const Turn = (turn) => {
    let gameMsgs = document.getElementById("Game-msgs");
    let playerZone = document.getElementById("Player-zone");
    let playerStatus = document.getElementById("Player-status");
    let dealerZone = document.getElementById("Dealer-zone");
    let dealerStatus = document.getElementById("Dealer-status");
    if(turn === "PLAYER"){
        gameMsgs.innerText = "PLAYER'S TURN";
        playerZone.style.border = "2px solid white";
        dealerZone.style.border = "none";
        playerStatus.innerText = "GO";
        dealerStatus.innerText = "STANDBY";
        Deal("PLAYER");
    } else {
        gameMsgs.innerText = "DEALER'S TURN";
        dealerZone.style.border = "2px solid white";
        playerZone.style.border = "none";
        dealerStatus.innerText = "GO";
        playerStatus.innerText = "STANDBY";
        Deal("DEALER");
    }
}

export default Turn;