import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {


  const [parag, setPara] = useState(false);
  
  const[btn, setBtn] = useState(true)
         function setpage(){
                 setPara(true);
                 setBtn(false)
         }
  return (
    <div id="main">
 {btn ?(<button id="click" onClick={setpage}>clickMe</button>):null}
 
 
 {parag?(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>):null}
    
    
    </div>
  );
}


export default App;
