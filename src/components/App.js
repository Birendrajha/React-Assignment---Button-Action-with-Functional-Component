import React, {Component, useState} from "react";
import "./../styles/App.css";

function App(props) {

function showPara(){
    document.getElementById('para').innerText= props.children;
}

  return (
    <div id="main">
                  
                  <button id="click" onClick={showPara}>click!</button>
                  <p id="para"></p>
    </div>
  );
}


export default App;
