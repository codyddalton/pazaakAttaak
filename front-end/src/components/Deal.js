import CardFlip from "../sounds/cardFlip.mp3";
import Turn from "../components/Turn";
import Total from "../components/Total";
import Color from "../components/Color";
import Condition from "../components/Condition";
import Randomize from "../components/Randomize";

let playerCards = [];
let dealerCards = [];
const Deal = (turn) => {
    let playerStatus = document.getElementById("Player-status");
    let dealerStatus = document.getElementById("Dealer-status");
    let playerTotal = document.getElementById("Player-total");
    let dealerTotal = document.getElementById("Dealer-total");
    let pTotal = playerTotal.innerText.replace(/[^0-9]/g,"");
    let dTotal = dealerTotal.innerText.replace(/[^0-9]/g,"");
    let cardFlip = new Audio(CardFlip);
    if(turn === "PLAYER"){
        if(playerStatus === "STAND" || playerStatus === "PAZAAK"){
            Turn("DEALER");
        } else {
            let cardTxt = Randomize(10, 1);
            let newCard = document.createElement("p");
            newCard.innerText = cardTxt;
            setTimeout(() => {
                cardFlip.play();
                playerCards.push(cardTxt);
                let cardZone = document.getElementById("Player-cardZone");
                cardZone.insertAdjacentElement('afterbegin', newCard);
                let total = Total(playerCards);
                playerTotal.innerTxt = "TOTAL : " + total;
                let txtColor = Color(total);
                playerTotal.style.color = txtColor;
                Condition(pTotal, dTotal);
            }, 500)
        }
    } else {
        if(dealerStatus === "STAND" || dealerStatus === "PAZAAK"){
            Turn("PLAYER");
        } else {
            let cardTxt = Randomize(10, 1);
            let newCard = document.createElement("p");
            newCard.innerText = cardTxt;
            setTimeout(() => {
                cardFlip.play();
                dealerCards.push(cardTxt);
                let cardZone = document.getElementById("Dealer=cardZone");
                cardZone.insertAdjacentElement('afterbegin', newCard);
                let total = Total(dealerCards);
                dealerTotal.innerTxt = "TOTAL : " + total;
                let txtColor = Color(total);
                playerTotal.style.color = txtColor;
                Condition(pTotal, dTotal);
            }, 500);
        }
    }
}
export default Deal;