import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import * as dat from 'dat.gui';
import { MeshBasicMaterial, MeshStandardMaterial } from 'three';

const canvas = document.querySelector('.canvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 50);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);


const controlls = new OrbitControls(camera, canvas);
controlls.enableDamping = true;


// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light to the scene
const sunLight = new THREE.DirectionalLight(0xffffff, 1);
sunLight.position.set(0, 0, 50);
scene.add(sunLight);

// Load textures for the sun and comets
const sunTexture = new THREE.TextureLoader().load('../../files/t.jpg');
const cometTexture = new THREE.TextureLoader().load('../../files/t3.jpg');

// Load noise map for the sun surface
const noiseTexture = new THREE.TextureLoader().load('path/to/sun/noise/map');

// Create a material for the sun with the texture and noise map
const sunMaterial = new THREE.MeshPhongMaterial({
    map: sunTexture,
    normalMap: noiseTexture,
    normalScale: new THREE.Vector2(0.5, 0.5),
});

// Create a sphere for the sun with the material
const sunGeometry = new THREE.SphereGeometry(10, 128, 128);
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Create an array to hold the comets
const comets = [];

// Create 10 comets and add them to the scene in a circular orbit around the sun
for (let i = 0; i < 10; i++) {
    const cometMaterial = new THREE.MeshPhongMaterial({ map: cometTexture });
    const cometGeometry = new THREE.SphereGeometry(1, 32, 32);
    const comet = new THREE.Mesh(cometGeometry, cometMaterial);
    const angle = (i / 10) * Math.PI * 2;
    const x = Math.sin(angle) * 20;
    const y = Math.cos(angle) * 20;
    comet.position.set(x, y, 0);
    comets.push(comet);
    scene.add(comet);
}

// Animate the comets in a circular orbit around the sun
let time = 0;
function animate() {
    requestAnimationFrame(animate);
    time += 0.02;
    for (let i = 0; i < comets.length; i++) {
        const comet = comets[i];
        const angle = (i / 10) * Math.PI * 2;
        const x = Math.sin(angle + time) * 20;
        const y = Math.cos(angle + time) * 20;
        comet.position.set(x, y, 0);
    }
    controlls.update();
    renderer.render(scene, camera);
}
animate();