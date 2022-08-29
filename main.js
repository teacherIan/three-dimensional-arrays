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
} from './init';

//You can change the camera position on the X, Y, or Z axis
camera.position.set(0, 0, 15);

const clock = new THREE.Clock();

//Any code to initialize your objects should go here.
//Any object created using createSphere() or createCube()
//Will be added to an array named 'objectArray'

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    createCube();
  } else {
    createSphere();
  }
}

for (let i = 0; i < objectArray.length; i++) {
  //distance between objects
  const margin = 3;
  //center objects
  const mid = (objectArray.length - 1) * 0.5 * margin;
  objectArray[i].position.x = i * margin - mid;
}

const loop = () => {
  //You can use the clock get elapsed time method to get the time since the start of the program
  clock.getElapsedTime();
  //Any code that will need to be updated on each frame should go here

  //object rotation. If you look closely at the spheres they are also rotating
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].rotation.x += 0.005 * i;
    objectArray[i].rotation.y += 0.005 * i;
  }

  //update scene on next frame
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
