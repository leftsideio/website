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
// export async function loadSvgGraphic(
//   svgUrl,
//   positionX = 0,
//   positionY = 0,
//   positionZ = 0,
//   scale = 1,
//   objectName = "svg"
// ) {
//   if (svgUrl === null || svgUrl === undefined || svgUrl === "") {
//     console.error("You must specify an URL for your SVG file")
//   }

//   // Function to convert the SVGLoader into a promise loader, as otherwise SVG elements might end-up in a wrong position (ie: city behind the sun)
//   function promisifyLoader(loader, onProgress) {
//     function promiseLoader(url) {
//       return new Promise((resolve, reject) => {
//         loader.load(url, resolve, onProgress, reject)
//       })
//     }
//     return {
//       originalLoader: loader,
//       load: promiseLoader,
//     }
//   }

//   // Convert SVGLoader into a promise, as required
//   let promiseLoader = promisifyLoader(new SVGLoader())

//   // Await for load, then...
//   const data = await promiseLoader.load(svgUrl)

//   let svgGroup = new THREE.Group()
//   let paths = data.paths

//   for (var i = 0; i < paths.length; i++) {
//     let path = paths[i]
//     let fillColor = path.userData.style.fill
//     if (fillColor !== undefined && fillColor !== "none") {
//       let svgMaterial = new THREE.MeshBasicMaterial({
//         color: new THREE.Color().setStyle(fillColor),
//         opacity: path.userData.style.fillOpacity,
//         transparent: path.userData.style.fillOpacity < 1,
//         side: THREE.DoubleSide,
//         depthWrite: false,
//       })

//       let svgShapes = path.toShapes(true)

//       for (var j = 0; j < svgShapes.length; j++) {
//         let svgShape = svgShapes[j]

//         let svgGeometry = new THREE.ShapeBufferGeometry(svgShape)
//         let svgMesh = new THREE.Mesh(svgGeometry, svgMaterial)

//         svgGroup.add(svgMesh)
//       }
//     }
//   }

//   // Set size and position
//   svgGroup.position.x = positionX
//   svgGroup.position.y = positionY
//   svgGroup.position.z = positionZ //negative value to simplify placement on Z axis
//   svgGroup.scale.y *= -scale //negative value to flip horizontaly SVG file as Three.js's SVGLoader loads SVG files upside-down
//   svgGroup.scale.x *= scale

//   // Get SVG shape size (Width/Height) to center it for easy placement
//   let svgInfo = new THREE.Box3().setFromObject(svgGroup)
//   let svgSize = svgInfo.getSize()

//   // Center SVG shape on X/Y axis
//   svgGroup.position.x += -svgSize.x + svgSize.x / 2
//   svgGroup.position.y += svgSize.y / 2

//   svgGroup.name = objectName
//   console.log(svgGroup)
//   return svgGroup
// }
