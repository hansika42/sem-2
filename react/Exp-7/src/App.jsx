/*import StudentCard from "./StudentCard";
function App(){
  return(
    <div>
      <h1>Student Card</h1>
      <StudentCard name="priya" marks="30" grade="A"/>
      <StudentCard name="nikita" marks="00" grade="C"/>
      <StudentCard name="anu" marks="20" grade="B"/>


    </div>
  );
}

export default App;
*/

import React from "react";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
return(
  <div style = {{textAlign: 'center', marginTop: '50px'}}>
    <h1>toggle button</h1>
    <button onClick = {() => setIsOn(!isOn)}>
      {isOn? 'ON' : 'OFF'}
      </button>
  </div>
);
}
export default App;

