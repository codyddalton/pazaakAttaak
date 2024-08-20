import './App.css';
import React, {useState, useEffect} from "react";
import Begin from "./components/Begin";
import End from "./components/End";
import Stand from "./components/Stand";
import './index.css';

function App() {
  useEffect(() => {
    let buttons = ["Stand-butn", "End-butn", "New-butn"];
    buttons.forEach((button) => {
      document.getElementById(button).disabled = true;
    });
    let playerWins = localStorage.getItem("playerWins");
    let dealerWins = localStorage.getItem("dealerWins");
    if(playerWins === null || dealerWins === null){
      localStorage.setItem("playerWins", "0");
      localStorage.setItem("dealerWins", "0");
      document.getElementById("Player-wins").innerText = "0";
      document.getElementById("Dealer-wins").innerText = "0";
    }
    else{
      document.getElementById("Dealer-wins").innerText = dealerWins;
      document.getElementById("Player-wins").innerText = playerWins;
    }

  },[]);

  return (
    <div className="App" >
      <h1 id="Title" style={{fontFamily: 'SWFont', fontSize:'3rem', letterSpacing:'10px', color:'yellow', textShadow:'6px 4px 4px #000000', marginTop:'5px'}}>PAZAAK ATTAAK</h1>
      <h2 id="Game-msgs" style={{fontFamily:'Sci-fi', color:'white', marginTop:'0%'}}>ARE YOU READY?</h2>
      <div className="Display" style={{display:"flex", flexDirection:"row"}}>
        
        <div id="Player-zone" className="Player-zone" style={{width:"48%"}}>
          <div className="Player-header">
            <h1 id="Player-name">PLAYER</h1>
            <h1 id="Player-status" style={{color:'yellow'}}>STANDBY</h1>
            <h1 id="Player-wins">0</h1>
          </div>
          <div id="Player-cardZone" className="Card-zone">
          </div>
          <p className="Player-total" id="Player-total">TOTAL : 0</p>
        </div>
        <div id="Dealer-zone" className="Dealer-zone" style={{width:"48%"}}>
          <div className="Player-header">
            <h1 id="Dealer-name">DEALER</h1>
            <h1 id="Dealer-status" style={{color:'yellow'}}>STANDBY</h1>
            <h1 id="Dealer-wins">0</h1>
          </div>
          <div id="Dealer-cardZone" className="Card-zone">
          </div>
          <p className="Player-total" id="Dealer-total">TOTAL : 0</p>
        </div>

      </div>
      <div className="Game-ui">
        <div className="Side-deck" style={{marginLeft:"1.5%", marginRight:"1.5%", borderRadius:'10px', border:"5px solid rgba(0,0,0,0.5)"}}>
          <div className="Side-deck-div">
            <p id="sd-card-1" className="Side-card-item">1</p>
            <p id="sd-card-2" className="Side-card-item">2</p>
            <p id="sd-card-3" className="Side-card-item">3</p>
            <p id="sd-card-4" className="Side-card-item">4</p>
          </div>
        </div>
        <div className="Butn-div">
          <button onClick={Begin} className="Game-butn" id="Begin-butn">Begin</button>
          <button onClick={(() => {
            Stand("PLAYER")
          })} className="Game-butn" id="Stand-butn">Stand</button>
          <button onClick={(() => {
            End("PLAYER")
          })} className="Game-butn" id="End-butn">End</button>
          <button className="Game-butn" id="New-butn">New</button>
        </div>
        <div className="Side-deck" style={{marginLeft:"1.5%", marginRight:"1.5%", borderRadius:'10px', border:"5px solid rgba(0,0,0,0.5)"}}>
          <div className="Side-deck-div">
              <p id="sd-card-1" className="Side-card-item">1</p>
              <p id="sd-card-2" className="Side-card-item">2</p>
              <p id="sd-card-3" className="Side-card-item">3</p>
              <p id="sd-card-4" className="Side-card-item">4</p>
            </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
