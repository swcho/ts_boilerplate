
import 'config-loader!./.config.ts';
import 'htmlout-loader!./en.html';
console.log(__filename);

//

import * as THREE from '../three';

// setup three.js

let renderer = new THREE.WebGLRenderer({
    antialias: true
});
let camera = new THREE.PerspectiveCamera(80);
let scene = new THREE.Scene();

document.querySelector('#three').appendChild(renderer.domElement);

// camera config

let controls = new THREE.OrbitControls(camera, renderer.domElement);

camera.position.z = 200;

function createPoint(x: number, y: number, z: number, color) {
    let geometry = new THREE.SphereGeometry(5, 32, 32);
    let material = new THREE.MeshBasicMaterial({ color });
    let sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
}

// lights

const lightRed = new THREE.DirectionalLight(0xff0000, 1);
lightRed.position.set(-100, 0, 0);
createPoint(-100, 0, 0, 0xff0000);
scene.add(lightRed);
// scene.add(new THREE.CameraHelper(lightRed.shadow.camera));

const light2 = new THREE.DirectionalLight(0x0000ff, 1);
light2.position.set(100, 0, 0);
light2.target.position.set(0, 0, 0);
scene.add(light2);
scene.add(new THREE.CameraHelper(light2.shadow.camera));
createPoint(100, 0, 0, 0x0000ff);

const light3 = new THREE.PointLight(0x00ff00, 1, 200);
light3.position.set(0, 0, 0);
createPoint(0, 0, 0, 0x00ff00);
scene.add(new THREE.CameraHelper(light3.shadow.camera));
scene.add(light3);

scene.add(new THREE.AxisHelper(100));

// create meshes

let cubes: THREE.Mesh<THREE.BAS.PhongAnimationMaterial, THREE.BAS.PrefabBufferGeometry>;
let geometry: THREE.BAS.PrefabBufferGeometry;
let material: THREE.BAS.PhongAnimationMaterial;

let config = {
    // size of the grid in world units
    gridSize: 100,
    // length of each axis
    gridLength: 12,
    // translation delta on the x axis
    deltaX: 300,
    // animation duration for each mesh
    duration: 4.0,
    // startTime for each mesh will be based on the total delay
    totalDelay: 1.0
};

function createCubes() {
    // dispose previous cubes
    dispose();

    // determine size of each cube based size and length
    let cubeSize = config.gridSize / (config.gridLength * 1.125);
    let gridHalfSize = config.gridSize * 0.5;

    // total cubes based on grid length on each axis
    let cubeCount = config.gridLength * config.gridLength * config.gridLength;

    console.log('CREATING ' + cubeCount + ' CUBES');

    // create the geometry that will be repeated in the buffer geometry
    // I refer to this 'base' geometry as a prefab
    // let prefab = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    let prefab = new THREE.CircleGeometry(cubeSize, cubeSize, cubeSize * 10);

    // create the buffer geometry where a set number of prefabs are repeated
    // PrefabBufferGeometry offers some utility methods for working with such geometries
    geometry = new THREE.BAS.PrefabBufferGeometry(prefab, cubeCount);

    // create a buffer for start positions per prefab, with an item size of 3 (x, y, z)
    let startPositionBuffer = geometry.createAttribute('startPosition', 3);
    // create a buffer for end positions per prefab, with an item size of 3 (x, y, z)
    let endPositionBuffer = geometry.createAttribute('endPosition', 3);
    // create a buffer for duration per prefab, with the item size of 1
    let durationBuffer = geometry.createAttribute('duration', 1);
    // create a buffer for start time per prefab, with the item size of 1
    let startTimeBuffer = geometry.createAttribute('startTime', 1);

    // create a buffer for rotation with 4 components per vertex
    // we use x, y and z to store an axis
    // and w to store the rotation around that axis
    let rotationBuffer = geometry.createAttribute('rotation', 4);

    // populate the buffers

    let cubeIndex = 0;
    // reuse the same array and vector each loop iteration
    let tmpa = [];
    let tmpv = new THREE.Vector3();

    for (let x = 0; x < config.gridLength; x++) {
        for (let y = 0; y < config.gridLength; y++) {
            for (let z = 0; z < config.gridLength; z++) {

                // calculate start position spread around the x, y, and z axes, offset by half delta on the x axis
                // the x, y and z values are stored in the temporary array
                tmpa[0] = THREE.Math.mapLinear(x, 0, config.gridLength - 1, gridHalfSize, -gridHalfSize) - config.deltaX * 0.5;
                tmpa[1] = THREE.Math.mapLinear(y, 0, config.gridLength - 1, gridHalfSize, -gridHalfSize);
                tmpa[2] = THREE.Math.mapLinear(z, 0, config.gridLength - 1, gridHalfSize, -gridHalfSize);
                // geometry.setPrefabData will use the array to set the same values for each vertex in a prefab based on an index
                geometry.setPrefabData(startPositionBuffer, cubeIndex, tmpa);

                // repeat the same steps for the end position
                tmpa[0] = THREE.Math.mapLinear(x, 0, config.gridLength - 1, gridHalfSize, -gridHalfSize) + config.deltaX * 0.5;
                tmpa[1] = THREE.Math.mapLinear(y, 0, config.gridLength - 1, gridHalfSize, -gridHalfSize);
                tmpa[2] = THREE.Math.mapLinear(z, 0, config.gridLength - 1, gridHalfSize, -gridHalfSize);

                geometry.setPrefabData(endPositionBuffer, cubeIndex, tmpa);

                // repeat the same steps for duration
                // in this example, the duration is the same for each prefab, so it could be set as a uniform
                tmpa[0] = config.duration;

                geometry.setPrefabData(durationBuffer, cubeIndex, tmpa);

                // repeat the sa5me steps for start time
                tmpa[0] = (config.totalDelay / cubeCount) * cubeIndex;

                geometry.setPrefabData(startTimeBuffer, cubeIndex, tmpa);

                // calculate rotation using a random axis and a rotation of 360 degrees around that axis

                // get a random axis
                THREE.BAS.Utils.randomAxis(tmpv);
                // store the x, y and z values in the array
                tmpv.toArray(tmpa);
                // set the rotation to 2 PI (can be anything)
                tmpa[3] = Math.PI * 4;
                // tmpa[3] = 0;

                geometry.setPrefabData(rotationBuffer, cubeIndex, tmpa);

                // increment the cubeIndex for the next iteration
                cubeIndex++;
            }
        }
    }

    // create the animation material
    // it 'extends' THREE.MeshPhongMaterial by injecting arbitrary GLSL code at key places in the shader code
    material = new THREE.BAS.PhongAnimationMaterial({
        // shading: THREE.FlatShading,
        flatShading: true,
        // define a time uniform that will control the state of the animation
        // the uniform will be the same for each vertex
        uniforms: {
            time: { value: 0 }
        },
        // add GLSL definitions for the uniform and the 4 attributes we defined on the geometry
        // the names and types must be the same as defined above
        // we use vec3 for attributes with an item size of 3
        // we use float for attributes with an item size of 1
        vertexParameters: [
            'uniform float time;',

            'attribute vec3 startPosition;',
            'attribute vec3 endPosition;',
            'attribute float startTime;',
            'attribute float duration;',
            // don't forget to add the new rotation attribute here!
            // also note the type vec4
            'attribute vec4 rotation;',
        ],
        // add definitions for functions to be used in the vertex shader
        vertexFunctions: [
            // the ease functions follow an underscore deliminated naming convention.
            THREE.BAS.ShaderChunk['ease_cubic_in_out'],
            // quatFromAxisAngle and rotateVector functions
            THREE.BAS.ShaderChunk['quaternion_rotation']
        ],
        // add the GLSL animation update logic
        vertexPosition: [
            // progress is calculated based on the time uniform, and the duration and startTime attributes
            'float progress = clamp(time - startTime, 0.0, duration) / duration;',

            // use the single argument variant of the easing function to ease the progress
            // the function names are camel cased by convention
            'progress = easeCubicInOut(progress);',

            // calculate the quaternion representing the desired rotation
            // we use the axis stored in the attribute and calculate rotation based on progress
            'vec4 quat = quatFromAxisAngle(rotation.xyz, rotation.w * progress);',

            // 'transformed' is a variable defined by THREE.js.
            // it is used throughout the vertex shader to transform the vertex position

            // rotate the vertex by applying the quaternion
            'transformed = rotateVector(quat, transformed);',

            // scale based on progress
            // progress 0.0 = scale 0.0
            // progress 0.5 = scale 1.0
            // progress 1.0 = scale 0.0
            'float scl = progress * 2.0 - 1.0;',
            'scl = 1.0 - scl * scl;',
            'transformed *= scl;',

            // 'mix' is a built-in GLSL method that performs linear interpolation
            'transformed += mix(startPosition, endPosition, progress);'
        ]
    });

    // once the geometry and metrials are defined we can use them to create one single mesh, and add it to the scene
    cubes = new THREE.Mesh(geometry, material);
    scene.add(cubes);
}

function dispose() {
    cubes && scene.remove(cubes);
    geometry && geometry.dispose();
    material && material.dispose();
}

createCubes();

// loop

// var stats = new Stats();
// document.body.appendChild(stats.dom);

function tick() {
    // stats.begin();
    update();
    render();
    // stats.end();

    requestAnimationFrame(tick);
}

function update() {
    // instead of updating a global time variable, we update the time uniform defined on the material

    // increment global time
    cubes.material.uniforms.time.value += 1 / 60;
    // reset time when it exceeds the total duration
    cubes.material.uniforms.time.value %= (config.duration + config.totalDelay);
}

function render() {
    renderer.render(scene, camera);
}

requestAnimationFrame(tick);

// resize

function resize() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize);
resize();

// html controls

let btnIncr = document.querySelector('.btn.incr');
let btnDecr = document.querySelector('.btn.decr');
let counter = document.querySelector('.count');

btnIncr.addEventListener('click', function () {
    config.gridLength++;

    updateCount();
    createCubes();
});

btnDecr.addEventListener('click', function () {
    if (config.gridLength === 4) return;

    config.gridLength = Math.min(4, config.gridLength - 1);

    updateCount();
    createCubes();
});

function updateCount() {
    counter.innerHTML = 'grid: ' + config.gridLength + ', total: ' + (config.gridLength * config.gridLength * config.gridLength);
}

updateCount();
