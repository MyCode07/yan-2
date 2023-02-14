import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import * as dat from 'dat.gui';
import { MeshBasicMaterial, MeshStandardMaterial } from 'three';

const gui = new dat.GUI({
    width: 350
});

const canvas = document.querySelector('.canvas');
const scene = new THREE.Scene();

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);


const count = 5000;
const geometryStars = new THREE.BufferGeometry();
const positionArray = new Float32Array(count * 3);
const starsColor = new Float32Array(count * 3);
const materialStars = new THREE.PointsMaterial({ size: 0.01, sizeAttenuation: true, })
materialStars.vertexColors = true
materialStars.depthWrite = false
materialStars.blending = THREE.AdditiveBlending

const colorTexture = textureLoader.load('../../files/kameta2.jpg')


const ambientLight = new THREE.AmbientLight(0xb9d5ff, 0.12);
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight);

const directinalLight = new THREE.DirectionalLight(0xb9d5ff, 0.12)
directinalLight.position.set(4, 5, -2)
scene.add(directinalLight)

directinalLight.castShadow = true
ambientLight.castShadow = true


function generateStats() {
    for (let i = 0; i < count * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 300
        starsColor[i] = Math.random()
    }
    geometryStars.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
    geometryStars.setAttribute('color', new THREE.BufferAttribute(starsColor, 3))
    const particles = new THREE.Points(geometryStars, materialStars)
    scene.add(particles)
}
generateStats()

const planetGeometry = new THREE.SphereGeometry(2, 32, 32);
const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.set(0, 0, 0);
scene.add(planet);




const parametrs = {}
parametrs.count = 10000
parametrs.size = 0.01
parametrs.radius = 3
parametrs.branches = 2
parametrs.spin = 3
parametrs.radnomness = 0.2
parametrs.radnomnessPower = 3
parametrs.insideColor = '#ff6030'
parametrs.outsideColor = '#1b3984'



// чтобы обновление gui срабоатли создаем геометрию материал и обекты вне функции запуска галактики 
let geometry = null,
    material = null,
    spheres = null;

const genereateGalaxy = () => {

    // перед каждым запуском финкции проверяем если обекты(points) уже существуют стриаем  геометрию, материал (dispose - удаляет память three) и удаляем обекты из сцены далее собираем галактику занаво по заданным в gui параметрам 
    if (spheres !== null) {
        geometry.dispose()
        material.dispose()
        scene.remove(spheres)
    }

    geometry = new THREE.SphereGeometry()
    const possitionsArray = new Float32Array(parametrs.count * 3)

    for (let i = 0; i < possitionsArray.length; i++) {
        const i3 = i * 3
        const radius = Math.random() * parametrs.radius;


        const phi = Math.random() * Math.PI * 2;
        const rnd = Math.random() + radius

        let v = {
            x: 0,
            y: 0,
            z: 0
        }

        let r = parametrs.radius + (rnd < 0.6 ? Math.pow(Math.random(), 1 / 6) : Math.pow((3 + 5 * Math.random()) * Math.random(), 1 / 6));

        v.x = r * Math.cos(phi);
        v.y = Math.random() * -0.5
        v.z = r * Math.sin(phi);


        possitionsArray[i3 + 0] = v.x
        possitionsArray[i3 + 1] = v.y
        possitionsArray[i3 + 2] = v.z

        const spheress = new THREE.Mesh(
            new THREE.SphereGeometry(Math.random(), 16, 16),
            new THREE.MeshStandardMaterial({
                color: "#ffffff",
            })
        )
        spheress.position.set(v.x, v.y, v.z)
        scene.add(spheress)
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(possitionsArray, 3))
    geometry.parameters.radius = 1;
    geometry.parameters.heightSegments = 16;
    geometry.parameters.widthSegments = 16;

    material = new THREE.MeshStandardMaterial({
        color: "#ffffff",
        // map: colorTexture,
    })

    spheres = new THREE.Mesh(geometry, material)
    spheres.castShadow = true
    // scene.add(spheres)

    

}

genereateGalaxy()

// onFinishChange  запускает функцию генеразии заново чтобы обновились параметры
gui.add(parametrs, 'count').min(1000).max(1000000).step(100).onFinishChange(genereateGalaxy);
gui.add(parametrs, 'size').min(0.001).max(0.2).step(0.001).onFinishChange(genereateGalaxy);
gui.add(parametrs, 'radius').min(0.01).max(20).step(0.01).onFinishChange(genereateGalaxy);
gui.add(parametrs, 'branches').min(2).max(20).step(1).onFinishChange(genereateGalaxy);
gui.add(parametrs, 'spin').min(-5).max(5).step(0.001).onFinishChange(genereateGalaxy);
gui.add(parametrs, 'radnomness').min(0).max(2).step(0.001).onFinishChange(genereateGalaxy);
gui.add(parametrs, 'radnomnessPower').min(1).max(10).step(0.001).onFinishChange(genereateGalaxy);
gui.addColor(parametrs, 'insideColor').onFinishChange(genereateGalaxy);
gui.addColor(parametrs, 'outsideColor').onFinishChange(genereateGalaxy);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = Math.PI * 0.6;
camera.position.z = 6;
scene.add(camera);


const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const controlls = new OrbitControls(camera, canvas);
controlls.enableDamping = true;

const clock = new THREE.Clock();
const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    spheres.rotation.y = -elapsedTime * 0.01;

    controlls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};
tick();

window.addEventListener('resize', function () {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    renderer.setSize(sizes.width, sizes.height);
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})