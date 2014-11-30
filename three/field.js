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

// var cw = containerWidth / 100;
// var ch = containerHeight / 100;
// var camera = new THREE.OrthographicCamera(
//     cw / -2, cw / 2,
//     ch / 2, ch / -2,
//     0.1, 1000
// );

camera.position.z = 3;

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
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x008888 });
var cube = new THREE.Mesh(unitCubeGeom, cubeMaterial);

// cube.geometry.dynamic = true;
// cube.geometry.vertices[0].x = 1;
// cube.geometry.vertices[0].y = 1;
// cube.geometry.vertices[0].z = 1;
// cube.geometry.verticesNeedUpdate = true;
// cube.geometry.normalsNeedUpdate = true;
scene.add(cube);


var radius = 0.7, segments = 32, rings = 32;
var sphereGeom = new THREE.SphereGeometry(radius, segments, rings);
var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xcc9900 });
var sphere = new THREE.Mesh(sphereGeom, sphereMaterial);

// scene.add(sphere);

/////////////////////////////////////////////////////////////////////

var squares = [];
var max = 3;
for (var x = 0; x < max; x++) {
    for (var y = 0; y < max; y++) {
        var newSquare = new THREE.Mesh(
            new THREE.BoxGeometry(0.1 + 0.1 * x, 0.1 + 0.1 * x, 0.5),
            cubeMaterial
        );
        newSquare.position.x = x;
        newSquare.position.y = y;
        newSquare.z = 1;
        scene.add(newSquare);
    }
}

/////////////////////////////////////////////////////////////////////

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.04;

    // camera.rotation.x += 0.02;
}
render();





