//
// dom element to draw into
//
var $container = $('#container');
var containerWidth = $container.width();
var containerHeight = $container.height();

//
// renderer to draw with
//
var renderer = new THREE.WebGLRenderer();
renderer.setSize(containerWidth, containerHeight);
// attach the renderer's dom element to the container
$container.append(renderer.domElement);

//
// camera
//
var camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
camera.position.z = 4;

//
// scene
//
var scene = new THREE.Scene();
// add camera to the scene
scene.add(camera);

//
// light source
//
var pointLight = new THREE.PointLight(0xffffff);
// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
// add to the scene
scene.add(pointLight);

/////////////////////////////////////////////////////////////////////

//
// things to draw
//
var unitCubeGeom = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(unitCubeGeom, cubeMaterial);
scene.add(cube);

var radius = 0.7, segments = 16, rings = 16;
var sphereGeom = new THREE.SphereGeometry(radius, segments, rings);
var sphereMaterial = cubeMaterial;
var sphere = new THREE.Mesh(sphereGeom, sphereMaterial);
scene.add(sphere);

/////////////////////////////////////////////////////////////////////

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
}
render();