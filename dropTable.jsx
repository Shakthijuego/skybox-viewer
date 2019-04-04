import React from 'react';
import ReactDropzone from "react-dropzone";



export class TextureDropZone extends React.Component {

    render() {
        return (

            <ReactDropzone accept="image/*">
                {({ getRootProps, getInputProps }) => (
                    <div
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />

                        <div style={{ width: "100px", height: "100px", backgroundColor: "#87ceeb" }}>
                            <p style={{ margin: "10px" }}>{this.props.text}</p>
                        </div>


                    </div>
                )}
            </ReactDropzone>
        );

    }
}


export default class dropTable extends React.Component {

    render() {
        return (
            <table>
                <tbody>
                    <tr><td><TextureDropZone text="+X"/></td></tr>
                    <tr><td><TextureDropZone text="-X"/></td></tr>
                    <tr><td><TextureDropZone text="+Y"/></td></tr>
                    <tr><td><TextureDropZone text="-Y"/></td></tr>
                    <tr><td><TextureDropZone text="+Z"/></td></tr>
                    <tr><td><TextureDropZone text="-Z"/></td></tr>
                </tbody>
            </table>
        )


    }



}

//



