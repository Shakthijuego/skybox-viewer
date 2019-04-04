import React from 'react';
import Droptable from './dropTable.jsx'


export default class App extends React.Component {

    onTextureUpdate(){

    }
    
    render() {
      return (
        <div> 
         <div id="world"/>
         <div style={{position:"absolute",left:"10px",top:"10px"}}>
         <Droptable onTextureUpdate={this.onTextureUpdate}/>
         
         </div>
         
        </div>
        
      );
    }
  }
