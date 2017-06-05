import * as THREE from "three";

export default function createBox(store) {

  // create the box's material
  const boxMaterial =
    new THREE.MeshLambertMaterial({
      color: 0x00cc00
    });

  // Set up the box vars
  const WIDTH = 40;
  const HEIGHT = 40;
  const DEPTH = 40;

  // Create a new mesh with
  // box geometry - we will cover
  // the boxMaterial next!
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(WIDTH, HEIGHT, DEPTH),
    boxMaterial
  );

  return box;
}