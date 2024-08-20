import Turn from "../components/Turn";

const Begin = () => {
    document.getElementById("Stand-butn").disabled = false;
    document.getElementById("End-butn").disabled = false;
    document.getElementById("Begin-butn").disabled = true;
    Turn("PLAYER");
}
export default Begin;