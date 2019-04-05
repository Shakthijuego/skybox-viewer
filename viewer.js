import OrbitControls from 'orbit-controls-es6';
import * as THREE  from 'three';
var scene,camera,renderer,controls,materials;
export function init() {

    var container = document.getElementById('world');

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );


    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 100 );
    camera.position.z = 0.01;
    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.rotateSpeed = - 0.25;
    

    var textures = getTexturesFromAtlasFile( "sun_temple_stripe.jpg", 6 );

     materials = [];
    for ( var i = 0; i < 6; i ++ ) {
        materials.push( new THREE.MeshBasicMaterial( { map: textures[ i ] } ) );
    }
    var skyBox = new THREE.Mesh( new THREE.BoxBufferGeometry( 1, 1, 1 ), materials );
    skyBox.geometry.scale( 1, 1, - 1 );
    scene.add( skyBox );
    window.addEventListener( 'resize', onWindowResize, false );

}


export function updateTexture(state,tag){
var texture = new THREE.Texture();

var image = new Image();
image.src = state[tag].preview;
image.onload = function() { 
    texture.image = image; 
    texture.needsUpdate = true; 
console.log(tag);
    switch (tag) {
        case "xpos":
        materials[0].map = texture;
            break;
        case "xneg":
        materials[1].map = texture;
        break;
        case "ypos":
        materials[2].map = texture;
            break;
        case "yneg":
        materials[3].map = texture;
            break;

        case "zpos":
        materials[4].map = texture;
            break;
        case "zneg":
        materials[5].map = texture;
            break;
        
        default:
            break;
    }

};
}



function getTexturesFromAtlasFile( atlasImgUrl, tilesNum ) {
    var textures = [];
    for ( var i = 0; i < tilesNum; i ++ ) {
        textures[ i ] = new THREE.Texture();
    }
    var imageObj = new Image();
    imageObj.onload = function () {
        var canvas, context;
        var tileWidth = imageObj.height;
        for ( var i = 0; i < textures.length; i ++ ) {
            canvas = document.createElement( 'canvas' );
            context = canvas.getContext( '2d' );
            canvas.height = tileWidth;
            canvas.width = tileWidth;
            context.drawImage( imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth );
            textures[ i ].image = canvas;
            textures[ i ].needsUpdate = true;
        }
    };
    imageObj.src = atlasImgUrl;
    return textures;
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
export function animate() {
    requestAnimationFrame( animate );
    controls.update(); // required when damping is enabled
    renderer.render( scene, camera );
}




