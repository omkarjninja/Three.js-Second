import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( "#83764F" );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 3.5, 1, 1 );
const geometry2 = new THREE.BoxGeometry( 1.5, 3, 1 );
const geometry3 = new THREE.BoxGeometry( 0.5, 2, 0.8 );
const geometry5 = new THREE.BoxGeometry( 0.5, 2, 0.8 );
const material = new THREE.MeshBasicMaterial( { color: "white" } );
const material2 = new THREE.MeshBasicMaterial( { color: "#FF9A33" } );
const material3 = new THREE.MeshBasicMaterial( { color: "#128807" } );
const material5 = new THREE.MeshBasicMaterial( { color: "#128807" } );
const cube = new THREE.Mesh( geometry, material );
const cubiod = new THREE.Mesh( geometry2, material2 );
const cabar=new THREE.Mesh(geometry3,material3)
const leg=new THREE.Mesh(geometry5,material5)
const geometry4 = new THREE.CircleGeometry( 0.25, 32 ); 
const material4 = new THREE.MeshBasicMaterial( { color: "white" } ); 
const circle = new THREE.Mesh( geometry4, material4 ); 
const circle2 = new THREE.Mesh( geometry4, material4 ); 
const geometry6 = new THREE.CircleGeometry( 0.1, 32 ); 
const material6 = new THREE.MeshBasicMaterial( { color: "black" } ); 
const circle3 = new THREE.Mesh( geometry6, material6 ); 
const circle4 = new THREE.Mesh( geometry6, material6 ); 

scene.add( circle );
scene.add( cube );
scene.add( cubiod );
scene.add(cabar)
scene.add(leg)
scene.add(circle2)
scene.add(circle3)
scene.add(circle4)
circle3.position.z=2
circle3.position.x=-0.175
circle3.position.y=0.465
circle4.position.z=2
circle4.position.x=0.25
circle4.position.y=0.465
cubiod.position.y=0
circle.position.z=0.5
circle.position.x=-0.25
circle.position.y=0.7
circle2.position.z=0.5
circle2.position.x=0.4
circle2.position.y=0.7
cabar.position.x=-0.25
cabar.position.y=-1.5
leg.position.x=0.4
leg.position.y=-1.5
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.position.x += 0.001;
   cubiod.position.x += 0.001;
    cabar.position.x += 0.001;
	leg.position.x += 0.001;
   circle.position.x += 0.001;
    circle2.position.x += 0.001;
	circle3.position.x += 0.0007;
   circle4.position.x += 0.0007;
    
	renderer.render( scene, camera );
}
renderer.render( scene, camera );
animate()