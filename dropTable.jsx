import React from 'react';
import ReactDropzone from "react-dropzone";
import { withPreviews, clearPreviews } from './with-previews'



export class TextureDropZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: null };
    }

    handleDrop = (accepted, rejected) =>{
    this.setState({ file: accepted[0] });
    this.props.onFileUpdate(this.state.file,this.props.tag);
    }
    render() {
        return (

            <ReactDropzone accept="image/*" onDrop={withPreviews(this.handleDrop)}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        

                        <div style={{ position: "relative", width: "100px", height: "100px", backgroundColor: "#87ceeb" }}>
                            <p style={{ margin: "10px" }}>{this.props.text}</p>
                            {this.state.file ? (<img
                            key={this.state.file.name}
                            src={this.state.file.preview}
                            style={{ position:"absolute",left:"10px",top:"10px",maxWidth: 80, display: 'block' }}
                            alt=""
                        />): <div /> }
                        </div>
                        

                    </div>
                )}
            </ReactDropzone>
        );

    }
}


export default class dropTable extends React.Component {
    state = {
        xpos:null,
        xneg:null,
        ypos:null,
        yneg:null,
        zpos:null,
        zneg:null,
    }

    onFileUpdate(file,tag){
        let newState={}
        newState[tag]=file;
        this.setState(newState);
        this.props.onTextureUpdate(this.state,tag);
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr><td><TextureDropZone text="+X" onFileUpdate={this.onFileUpdate.bind(this)} tag="xpos" /></td></tr>
                    <tr><td><TextureDropZone text="-X" onFileUpdate={this.onFileUpdate.bind(this)} tag="xneg"/></td></tr>
                    <tr><td><TextureDropZone text="+Y" onFileUpdate={this.onFileUpdate.bind(this)} tag="ypos"/></td></tr>
                    <tr><td><TextureDropZone text="-Y" onFileUpdate={this.onFileUpdate.bind(this)} tag="yneg"/></td></tr>
                    <tr><td><TextureDropZone text="+Z" onFileUpdate={this.onFileUpdate.bind(this)} tag="zpos"/></td></tr>
                    <tr><td><TextureDropZone text="-Z" onFileUpdate={this.onFileUpdate.bind(this)} tag="zneg"/></td></tr>
                </tbody>
            </table>
        )


    }



}

        //



