import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {


  const [parag, setPara] = useState('');
  
  const[btn, setBtn] = useState(true)

  return (
    <div id="main">
 {btn ?(<button id="click" onClick={()=>{setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"); setBtn(false)}}>click!!</button>):null}
 {/* <button id="click" onClick={()=>{setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy") setBtn(false)}}>click!!</button> */}
 
 
 <p id="para">{parag}</p>
    
    
    </div>
  );
}


export default App;
