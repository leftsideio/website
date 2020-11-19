import * as THREE from "three"
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"

export const mergeBufferGeometries = geoms =>
  BufferGeometryUtils.mergeBufferGeometries(geoms, false)

export function randomize(min, max, setting) {
  let randomResult,
    previousEvenRandomInteger,
    previousOddRandomInteger,
    previousRandomInteger,
    previousRandomFloat

  if (setting == "float") {
    // Get random float
    randomResult = Math.random() * (max - min + 1) + min

    if (randomResult == previousRandomFloat) {
      do {
        randomResult = Math.random() * (max - min + 1) + min
      } while (randomResult == previousRandomFloat)
      previousRandomFloat = randomResult
    }
  } else if (setting == "int") {
    // Get random integer
    randomResult = Math.floor(Math.random() * (max - min + 1)) + min

    if (randomResult == previousRandomInteger) {
      do {
        randomResult = Math.floor(Math.random() * (max - min + 1)) + min
      } while (randomResult == previousRandomInteger)
      previousRandomInteger = randomResult
    }
  } else if (setting == 1 || setting == 2) {
    // Get random integer (Odd or Even)
    randomResult = Math.floor(Math.random() * (max - min + 1)) + min

    if (
      randomResult == previousOddRandomInteger ||
      randomResult == previousEvenRandomInteger
    ) {
      if (setting == 1) {
        if (
          randomResult < previousOddRandomInteger + 1 &&
          randomResult > previousOddRandomInteger - 1
        ) {
          do {
            randomResult = Math.floor(Math.random() * (max - min + 1)) + min
          } while (
            randomResult < previousOddRandomInteger + 1 &&
            randomResult > previousOddRandomInteger - 1
          )
        }

        previousOddRandomInteger = randomResult
      } else if (setting == 2) {
        if (
          randomResult < previousEvenRandomInteger + 1 &&
          randomResult > previousEvenRandomInteger - 1
        ) {
          do {
            randomResult = Math.floor(Math.random() * (max - min + 1)) + min
          } while (
            randomResult < previousEvenRandomInteger + 1 &&
            randomResult > previousEvenRandomInteger - 1
          )
        }

        previousEvenRandomInteger = randomResult
      }
    }
  }
  return randomResult
}

export function loadSVG(url, { position, scale, name }) {
  return new Promise(resolve =>
    new SVGLoader().load(url, data => {
      const paths = data.paths
      let group = new THREE.Group()

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        const fillColor = path.userData.style.fill

        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setStyle(fillColor),
          opacity: path.userData.style.fillOpacity,
          transparent: path.userData.style.fillOpacity < 1,
          side: THREE.DoubleSide,
          depthWrite: false,
        })

        const shapes = path.toShapes(true)

        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j]

          const geometry = new THREE.ShapeBufferGeometry(shape)
          const mesh = new THREE.Mesh(geometry, material)

          group.add(mesh)
        }
      }

      // Set size and position
      group.position.x = position[0]
      group.position.y = position[1]
      group.position.z = position[2] //negative value to simplify placement on Z axis
      group.scale.y *= -scale //negative value to flip horizontaly SVG file as Three.js's SVGLoader loads SVG files upside-down
      group.scale.x *= scale

      // Get SVG shape size (Width/Height) to center it for easy placement
      const info = new THREE.Box3().setFromObject(group)
      const size = info.getSize(new THREE.Vector3(position))

      // Center SVG shape on X/Y axis
      group.position.x += -size.x + size.x / 2
      group.position.y += size.y / 2
      group.name = name
      return resolve(group)
    })
  )
}
