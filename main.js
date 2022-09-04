//imports
import * as THREE from 'three';

//scene initialization
import {
  camera,
  scene,
  renderer,
  createSphere,
  createCube,
  objectArray,
  controls,
} from './init';

//You can change the camera position on the X, Y, or Z axis
camera.position.set(0, 45, 50);
controls.autoRotate = false;

// controls.addEventListener('change', () => renderer.render(scene, camera));

const clock = new THREE.Clock();

//Any code to initialize your objects should go here.
//Any object created using createSphere() or createCube()
//Will be added to an array named 'objectArray'
let size = 11;

for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    for (let z = 0; z < size; z++) {
      /**
       * cube
       */
      // createSphere(x, y, z);
      /**
       * create Walls
       */
      // if (x == 0) {
      //   createSphere(x, y, z);
      // }
      // if (x == size - 1) {
      //   createSphere(x, y, z);
      // }
      // if (z == size - 1) {
      //   createSphere(x, y, z);
      // }
      // if (z == 0) {
      //   createSphere(x, y, z);
      // }
      // if (y == 0) {
      //   createSphere(x, y, z);
      // }
      // if (y == size - 1) {
      //   createSphere(x, y, z);
      // }
      /**
       * Create X
       */
      if (x == y) {
        createSphere(x, y, z);
      }

      //create 'X'
      //create '*'
    }
  }
}

const loop = () => {
  //You can use the clock get elapsed time method to get the time since the start of the program
  clock.getElapsedTime();
  //Any code that will need to be updated on each frame should go here

  //object rotation. If you look closely at the spheres they are also rotating
  for (let i = 0; i < objectArray.length; i++) {}

  //update scene on next frame
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
