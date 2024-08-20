
const Color = (total) => {
    if(total <= 15){
        return "rgba(255, 255, 255, 0.514)";
    }
    if(total > 15 && total < 20){
        return "rgba(255, 166, 0, 0.692)";
    }
    if(total === "20"){
        return "rgba(255, 217, 0, 0.521)";
    }
    if(total > 20){
        return "rgba(255, 0, 0, 0.397)";
    }
}
export default Color;