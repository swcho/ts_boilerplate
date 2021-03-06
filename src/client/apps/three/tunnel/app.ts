
import 'config-loader!./.config.ts';
import 'htmlout-loader!./en.html';
console.log(__filename);

// https://codepen.io/pjkarlik/pen/VzYPmV

import * as THREE from '../three';

// THREE.crossOrigin = "";
const stone = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/163598/matallo.jpg';

const stone2 =
    'http://s3-us-west-2.amazonaws.com/s.cdpn.io/163598/corrugated2.jpg';

// const bmp =
//     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/163598/matallo_bmp.jpg';

const bmp =
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/33170/egyptian_friz_2.png';

// Render Class Object //
class Render {
    start: number;
    stopFrame: number;
    angle: number;
    dec: number;
    frames: number;
    allowChange: boolean;
    timeout = 6000;
    tubes = [];
    isRnd = true;
    width = window.innerWidth;
    height = window.innerHeight;
    devicePixelRatio = window.devicePixelRatio;
    cameraConfig: {
        position: number[];
        lookAt: number[];
        aspect: number;
        viewAngle: number;
        near: number;
        far: number;
    };
    controlConfig;
    constructor() {
        this.start = Date.now();
        this.stopFrame = 0.0;
        this.angle = 255.0;
        this.dec = 55.0;
        this.frames = 0;
        this.stopFrame = 0;
        this.allowChange = false;
        this.timeout = 6000;
        this.tubes = [];
        this.isRnd = true;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.devicePixelRatio = window.devicePixelRatio;
        // Configurations //
        this.cameraConfig = {
            position: [0, 0, 4000],
            lookAt: [0, 0, 0],
            aspect: this.width / this.height,
            viewAngle: 45,
            near: 0.1,
            far: 10000
        };
        this.controlConfig = {
            max: 1500,
            min: 0
        };

        window.addEventListener('resize', this.resize, true);
        this.init();
    }

    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    bufferScene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    lightA: THREE.PointLight;
    lightB: THREE.PointLight;
    lightC: THREE.PointLight;
    init() {
        // Set Render and Scene //
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(this.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.bufferScene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            this.cameraConfig.viewAngle,
            this.cameraConfig.aspect,
            this.cameraConfig.near,
            this.cameraConfig.far
        );

        this.camera.position.set(this.cameraConfig.position[0], this.cameraConfig.position[1], this.cameraConfig.position[2]);
        this.camera.lookAt(new THREE.Vector3(...this.cameraConfig.lookAt));
        this.scene.add(this.camera);

        this.lightA = new THREE.PointLight(0xffffff, 1, 150);
        this.scene.add(this.lightA);
        this.lightB = new THREE.PointLight(0xff0000, 1, 350);
        this.scene.add(this.lightB);
        this.lightC = new THREE.PointLight(0x0000ff, 1, 350);
        this.scene.add(this.lightC);

        let lightH = new THREE.HemisphereLight(0xffffff, 0x241623, 1);
        lightH.position.set(0, 205, 20);
        this.scene.add(lightH);

        this.createScene();
    }

    getRandomVector() {
        const x = 0.0 + Math.random() * 255;
        const y = 0.0 + Math.random() * 255;
        const z = 0.0 + Math.random() * 255;
        return new THREE.Vector3(x, y, z);
    }

    makeTube = points => {
        const size = 0.3 + Math.random();
        return new THREE.Mesh(
            new THREE.TubeGeometry(
                new THREE.CatmullRomCurve3(this.makeRandomPath(points)),
                400,
                size,
                16,
                false
            ),
            this.tunnelMaterial2
        );
    }

    tunnelMaterial;
    tunnelMaterial2;
    path1;
    createScene = () => {
        const texloader = new THREE.TextureLoader();
        // texloader.crossOrigin = true;
        const texture = texloader.load(stone, () => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set(0, 0);
            texture.repeat.set(30, 4);
        });
        const bmpMap = texloader.load(bmp, () => {
            bmpMap.wrapS = bmpMap.wrapT = THREE.RepeatWrapping;
            bmpMap.offset.set(0, 0);
            bmpMap.repeat.set(30, 4);
        });
        const texture2 = texloader.load(stone2, () => {
            texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
            texture2.offset.set(0, 0);
            texture2.repeat.set(500, 1);
        });
        this.tunnelMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            side: THREE.DoubleSide,
            bumpMap: bmpMap,
            bumpScale: 0.95
        });
        this.tunnelMaterial2 = new THREE.MeshPhongMaterial({
            map: texture2,
            side: THREE.DoubleSide
        });
        const initialPoints = [
            [0.0, 0.0, 600.0],
            [0.0, 0.0, 0.0],
            [1200.0, 0.0, 0.0],
            [1200.0, 1200.0, 0.0],
            [1200.0, 1200.0, 600.0],
            [1200.0, 600.0, 1200.0],
            [1200.0, 0.0, 1200.0],
            [0.0, 0.0, 1200.0],
            [0.0, 0.0, 600.0]
        ];

        const points = initialPoints.map(point => {
            const v3Point = new THREE.Vector3(...point);
            return v3Point;
        });

        this.path1 = new THREE.CatmullRomCurve3(points);

        const tube1 = new THREE.Mesh(
            new THREE.TubeGeometry(this.path1, 150, 40, 18, true),
            this.tunnelMaterial
        );
        this.scene.add(tube1);

        for (let i = 0; i < 20; i++) {
            const tube = this.makeTube(initialPoints);
            this.scene.add(tube);
            this.tubes.push(tube);
        }

        // this.effect = new THREE.AnaglyphEffect(this.renderer);
        // this.effect.setSize(this.width, this.height);
        setTimeout(() => {
            this.allowChange = true;
        }, this.timeout);

        setTimeout(() => {
            this.renderLoop();
        }, 800); // bad fix for images to load before it starts

        const controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        // controls.enableDamping = true;
        // controls.dampingFactor = .wwss25;
        controls.enableZoom = true;
        controls.autoRotate = false;
        controls.autoRotateSpeed = 5.0;
        controls.minDistance = -4000;
        // controls.maxDistance = 20;
        // controls.minPolarAngle = 0;
        // controls.maxPolarAngle = 1.5;

        // const controls = new THREE.TrackballControls(this.camera);
        // controls.rotateSpeed = 1.5;
        // controls.zoomSpeed = 1.2;
        // controls.panSpeed = 2.5;
        // controls.maxDistance = 5.5;
        // controls.minDistance = 1.25;
        // controls.noZoom = false;
        // controls.noPan = false;
        // controls.staticMoving = true;
        // controls.dynamicDampingFactor = 0.3;

        // var dragControls = new THREE.DragControls(activeObjects, camera, renderer.domElement);
        // dragControls.addEventListener('dragstart', function (event) { controls.enabled = false; });
        // dragControls.addEventListener('dragend', function (event) { controls.enabled = true; });

        // const controls = new THREE.FirstPersonControls(this.camera);

    }

    pointsIndex;
    makeRandomPath = pointList => {
        this.pointsIndex = [];
        const randomPoints = pointList.map((point, index) => {
            const check = index < 1 && index > 3;
            const rx = 25 - Math.random() * 50;
            const ry = 25 - Math.random() * 50;

            const tx = point[0] + rx;
            const ty = check ? point[1] + ry : point[1];
            const tz = check ? point[2] : point[2] + ry;
            const v3Point = new THREE.Vector3(tx, ty, tz);
            this.pointsIndex.push(v3Point);
            return v3Point;
        });
        return randomPoints;
    }

    resize = () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
    }

    renderScene = () => {
        this.stopFrame += 0.0008;
        // Get the point at the specific percentage
        const lvc = this.isRnd ? 0.03 : -0.03;
        const p1 = this.path1.getPointAt(Math.abs(this.stopFrame % 1));
        const p2 = this.path1.getPointAt(Math.abs((this.stopFrame + lvc) % 1));
        const p3 = this.path1.getPointAt(Math.abs((this.stopFrame + 0.07) % 1));
        const p4 = this.path1.getPointAt(Math.abs((this.stopFrame - 0.07) % 1));
        if (Math.random() * 255 > 254 && this.allowChange) {
            // this.isRnd = !this.isRnd;
            this.allowChange = false;
            setTimeout(() => {
                this.allowChange = true;
            }, this.timeout);
        }

        const amps = 45; // + Math.sin(realTime * Math.PI / 180) * 45;
        const tempX = amps * Math.sin(this.frames * Math.PI / 180) * 0.45;
        const tempY = amps * Math.cos(this.frames * Math.PI / 180) * 0.45;
        // Camera
        this.camera.position.set(p1.x + tempX, p1.y + tempY, p1.z + tempY);
        this.camera.lookAt(p2);
        // Lights
        this.lightA.position.set(p2.x, p2.y, p2.z);
        this.lightB.position.set(p3.x, p3.y, p3.z);
        this.lightC.position.set(p4.x, p4.y, p4.z);
        // Core three Render call //
        this.renderer.render(this.scene, this.camera);
    }

    renderLoop = () => {
        window.requestAnimationFrame(this.renderLoop.bind(this));
        this.frames++;
        this.renderScene();
    }
}

window.onload = () => {
    const demo = new Render();
    return demo;
};

