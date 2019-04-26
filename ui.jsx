import React from 'react';
import Droptable from './dropTable.jsx'

import {updateTexture as viewerTextureUpdate} from './viewer'


export default class App extends React.Component {

    onTextureUpdate(content,tag){
      viewerTextureUpdate(content,tag);
    }
    
    render() {
      return (
        <div> 
         <div id="world"/>
         <div style={{position:"absolute",left:"10px",top:"10px"}}>
         <Droptable onTextureUpdate={this.onTextureUpdate.bind(this)}/>
         </div>
         Drop files
         
        </div>
        
      );
    }
  }
