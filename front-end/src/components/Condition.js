import PazaakSound from "../sounds/pazaakChips.mp3";
import BustSound from "../sounds/bustBeep.mp3";
import Outcome from "../components/Outcome";
import Compare from "../components/Compare";

const Condition = (dealerTotal, playerTotal) => {
    let gameMsgs = document.getElementById("Game-msgs");
    let playerStatus = document.getElementById("Player-status");
    let dealerStatus = document.getElementById("Dealer-status");
    let pazaakSound = new Audio(PazaakSound);
    let bustSound = new Audio(BustSound);
    if(playerTotal === "20"){
        pazaakSound.play();
        playerStatus.innerText = "PAZAAK";
        document.getElementById("Stand-butn").disabled = true;
        document.getElementById("End-butn").disabled = true;
        gameMsgs.innerText = "PLAYER GETS PAZAAK!";
        setTimeout(() => {
            Compare("PLAYER", playerTotal, dealerTotal);
        }, 1000);
    }
    if(dealerTotal === "20"){
        pazaakSound.play();
        dealerStatus.innerText = "PAZAAK";
        gameMsgs.innerText = "DEALER GETS PAZAAK!";
        setTimeout(() => {
            Compare("PLAYER", playerTotal, dealerTotal);
        }, 1000);
    }
    if(playerTotal > 20){
        bustSound.play();
        playerStatus.innerText = "BUST";
        gameMsgs.innerText = "PLAYER GOES BUST";
        setTimeout(() => {
            Outcome("DEALER-WIN");
        }, 1200);
    }
    if(dealerTotal > 20){
        bustSound.play();
        dealerStatus.innerText = "BUST";
        gameMsgs.innerText = "DEALER GOES BUST";
        setTimeout(() => {
            Outcome("PLAYER-WIN");
        }, 1200);
    }
}
export default Condition;