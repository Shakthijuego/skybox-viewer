import React from 'react';
import Droptable from './dropTable.jsx'


export default class App extends React.Component {
    render() {
      return (
        <div> 
         <div id="world"/>
         <div style={{position:"absolute",left:"10px",top:"10px"}}>
         <Droptable ></Droptable>
         
         </div>
         
        </div>
        
      );
    }
  }
