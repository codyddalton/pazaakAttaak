
const Total = (cards) => {
    let sum = 0;
    cards.forEach(card => {
    sum += card
    });
    return sum;
}
export default Total;