// import React, { useState } from 'react';
// import Select from 'react-select'

// const App = () => {

//   var moods = [
//     {
//       value:1,
//       label : "Happy",
//       color: "green"
//     },
//     {
//       value:2,
//       label : "Sleepy",
//       color: "blue"

//     },
//     {
//       value:3,
//       label : "Exited",
//       color: "orange"
//     },
//     {
//       value:4,
//       label : "Sad",
//       color : "red"

//     }
//   ];
//   var [bgcolour , setBgcolour ] = useState(moods.label);
//   var bgHandler = e =>{
//     setBgcolour(e.color)
//   }
//   return (
//     <div>
//       <style>{'body {background-color:'+ bgcolour+';}'}</style>
//       <Select options={moods} onChange = {bgHandler}> </Select>
//       <center> 
//         <b>
//            <h1>React-Mood-Indicator </h1>
//            </b>
//       </center>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const App = () => {
const [color,setColor]= useState({
  c1:245,
  c2:241,
  c3:0
})
const handleChange=(e)=>{
  if(e.target.value === "2"){
    setColor({...color,c1:19,c2:0,c3:164});//19, 0, 164
  }else if(e.target.value === "3"){
    setColor({...color,c1:35,c2:177,c3:0});//(35, 177, 0)
  }
  else if(e.target.value === "4"){
    setColor({...color,c1:255,c2:0,c3:66});//(255, 0, 66)
  }
  else if(e.target.value === "1"){
    setColor({...color,c1:238,c2:241,c3:0});//(238, 241, 0)
  }
}
return (
  <div id="main">
  <select onChange={handleChange}>
    <option value="1">Happy</option>
    <option value="2">Sad</option>
    <option value="3">Sleepy</option>
    <option value="4">Excited</option>
  </select>
  <div id="mood-indicator" style={{backgroundColor:`rgb(${color.c1}, ${color.c2},${color.c3})`}}></div>
</div>
);
}
export default App;