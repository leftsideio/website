// synthwave
import * as THREE from "three"
import { randomize, mergeBufferGeometries, loadSVG } from "~/utils/3d"
import { SceneUtils } from "three/examples/jsm/utils/SceneUtils"
import sunSVG from "~/assets/images/3d/sun.svg"
import cityCloseSVG from "~/assets/images/3d/city-close.svg"
import cityFarSVG from "~/assets/images/3d/city-far.svg"

// lots of code taken directly from -> https://github.com/Moukrea/retrowave-scene/blob/master/retrowave_scene.js
export function roadlines() {
  let left = new THREE.PlaneBufferGeometry(0.35, 300, 0, 0)
  left.translate(-5.2, 110, 0.2)
  left.rotateX(-Math.PI * 0.5)

  let right = new THREE.PlaneBufferGeometry(0.35, 300, 0, 0)
  right.translate(5.2, 110, 0.2)
  right.rotateX(-Math.PI * 0.5)

  let centerLeft = new THREE.PlaneBufferGeometry(0.15, 300, 0, 0)
  centerLeft.translate(-1.8, 110, 0.2)
  centerLeft.rotateX(-Math.PI * 0.5)

  let centerRight = new THREE.PlaneBufferGeometry(0.15, 300, 0, 0)
  centerRight.translate(1.8, 110, 0.2)
  centerRight.rotateX(-Math.PI * 0.5)
  return mergeBufferGeometries([left, right, centerLeft, centerRight])
}

export function sidewalk() {
  let topLeft = new THREE.PlaneBufferGeometry(8, 300, 0, 0)
  topLeft.translate(-10, 110, 0.5)
  topLeft.rotateX(-Math.PI * 0.5)

  let sideLeft = new THREE.PlaneBufferGeometry(0.5, 300, 0, 0)
  sideLeft.translate(0.06, 110, 6)
  sideLeft.rotateX(-Math.PI * 0.5)
  sideLeft.rotateZ(Math.PI * 0.49)

  let topRight = new THREE.PlaneBufferGeometry(8, 300, 0, 0)
  topRight.translate(10, 110, 0.5)
  topRight.rotateX(-Math.PI * 0.5)

  let sideRight = new THREE.PlaneBufferGeometry(0.5, 300, 0, 0)
  sideRight.translate(0.44, 110, -6)
  sideRight.rotateX(-Math.PI * 0.5)
  sideRight.rotateZ(Math.PI * 0.49)
  return mergeBufferGeometries([topLeft, sideLeft, topRight, sideRight])
}

export function pyramids(speed) {
  let randomSize, translateX, translateZ, rotatePyramid

  let pyramidGeometry

  let pyramidGroupConception = []

  let minRandomSize, maxRandomSize, minTranslateX, maxTranslateX

  let minRotatePyramid = 0 // Common values with all pyramids
  let maxRotatePyramid = 2
  let minTranslateZ = 0
  let maxTranslateZ = 80

  for (let i = 0; i < 80; i++) {
    let ignoreGeometry = false
    if (i < 60) {
      // Furthest
      minRandomSize = 5
      maxRandomSize = 25
      minTranslateX = 27
      maxTranslateX = 120
    } else if (i >= 60) {
      // Closest pyramids
      minRandomSize = 3
      maxRandomSize = 8
      minTranslateX = 10
      maxTranslateX = 32
    }
    if (i % 2 == 0) {
      // For left side, make translateX negative as 0 is the center
      minTranslateX *= -1
      maxTranslateX *= -1
    }

    randomSize = randomize(minRandomSize, maxRandomSize, "int")
    translateX = randomize(minTranslateX, maxTranslateX, "float")
    translateZ = randomize(minTranslateZ, maxTranslateZ, "float")
    rotatePyramid = randomize(minRotatePyramid, maxRotatePyramid, "float")

    // If the geometry found its way onto the position history, add it to the pyramid group. Else, ignore it.

    pyramidGeometry = new THREE.ConeBufferGeometry(
      randomSize,
      randomSize,
      4,
      1,
      true,
      rotatePyramid
    )
    pyramidGeometry.translate(translateX, 0, translateZ)

    pyramidGroupConception.push(pyramidGeometry)
  }

  let pyramidGroupGeometry = mergeBufferGeometries(pyramidGroupConception)

  let pyramidGroupInstance = new THREE.InstancedBufferGeometry()
  pyramidGroupInstance.attributes.position = pyramidGroupGeometry.attributes.position
  pyramidGroupInstance.attributes.uv = pyramidGroupGeometry.attributes.uv
  pyramidGroupInstance.index = pyramidGroupGeometry.index
  let pyramidGroupPosition = []
  pyramidGroupPosition.push(0, 0, 0)
  pyramidGroupPosition.push(0, 0, 260)
  pyramidGroupPosition.push(0, 0, 520)
  pyramidGroupPosition.push(0, 0, 780)

  pyramidGroupInstance.setAttribute(
    "instPosition",
    new THREE.InstancedBufferAttribute(new Float32Array(pyramidGroupPosition), 3)
  )

  let pyramidGroupMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
  })
  pyramidGroupMaterial.onBeforeCompile = shader => {
    updateObjectShader(speed, shader, 950, 800)
  }

  // This needs to be improved...
  let pyramidGroupWireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x1be9ff,
    wireframe: true,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  })
  pyramidGroupWireframeMaterial.onBeforeCompile = shader => {
    updateObjectShader(speed, shader, 950, 800, 1.01)
  }

  let pyramidGroupMaterials = [pyramidGroupMaterial, pyramidGroupWireframeMaterial]

  let pyramidGroups = SceneUtils.createMultiMaterialObject(
    pyramidGroupInstance,
    pyramidGroupMaterials
  )
  return pyramidGroups
}

export function palms(speed) {
  let palmTreeConception = []
  // Paltree log
  var logGeometry = new THREE.CylinderBufferGeometry(0.25, 0.125, 10, 5, 4, true)
  logGeometry.translate(0, 5, 0)
  palmTreeConception.push(logGeometry)
  // Palmtree leaves
  for (let i = 0; i < 35; i++) {
    let leavesGeometry = new THREE.CircleBufferGeometry(1.25, 4)
    leavesGeometry.translate(0, 1.25, 0)
    leavesGeometry.rotateX(-Math.PI * 0.5)
    leavesGeometry.scale(0.25, 1, THREE.Math.randFloat(1, 1.5))
    leavesGeometry.attributes.position.setY(0, 0.25)
    leavesGeometry.rotateX(THREE.Math.randFloatSpread(Math.PI * 0.5))
    leavesGeometry.rotateY(THREE.Math.randFloat(0, Math.PI * 2))
    leavesGeometry.translate(0, 10, 0)
    palmTreeConception.push(leavesGeometry)
  }

  // Merge (log + leaves)
  var palmTree = mergeBufferGeometries(palmTreeConception)
  palmTree.rotateZ(THREE.Math.degToRad(-1.5))

  var palmTreeInstance = new THREE.InstancedBufferGeometry()
  palmTreeInstance.attributes.position = palmTree.attributes.position
  palmTreeInstance.attributes.uv = palmTree.attributes.uv
  palmTreeInstance.index = palmTree.index
  var palmTreePosition = []

  for (let i = 0; i < 40; i++) {
    var resultLeft = -randomize(20, 80, 1) // Left side
    var resultRight = randomize(20, 80, 2) // Right side

    palmTreePosition.push(-10, 0, i * 2 * 15 - 10 - 50)
    palmTreePosition.push(10, 0, i * 2 * 15 - 50)
    palmTreePosition.push(resultLeft, 0, i * 2 * 15 - resultLeft - 50)
    palmTreePosition.push(resultRight, 0, i * 2 * 15 + resultRight - 50)
  }

  palmTreeInstance.setAttribute(
    "instPosition",
    new THREE.InstancedBufferAttribute(new Float32Array(palmTreePosition), 3)
  )

  var palmTreeMaterial = new THREE.MeshBasicMaterial({
    color: 0x056023,
    side: THREE.DoubleSide,
    wireframe: true,
  })

  palmTreeMaterial.onBeforeCompile = shader => {
    updateObjectShader(speed, shader, 600, 500, undefined, 0.8, true)
  }

  // Add palm trees to the scene
  var palmTrees = new THREE.Mesh(palmTreeInstance, palmTreeMaterial)
  return palmTrees
}
export function sky() {
  let radius = 12
  let starsGeometry = new THREE.BufferGeometry()

  let vertices = []

  let vertex = new THREE.Vector3()
  let stars, starsMaterials

  for (let i = 0; i < 4000; i++) {
    vertex.x = Math.random() * 2 - 1
    vertex.y = Math.random() * 2 - 1
    vertex.z = Math.random() * 2 - 1
    vertex.multiplyScalar(radius)

    vertices.push(vertex.x, vertex.y, vertex.z)
  }

  starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))

  starsMaterials = [
    new THREE.PointsMaterial({
      color: 0x555555,
      size: 1,
      sizeAttenuation: false,
    }),
    new THREE.PointsMaterial({
      color: 0x555555,
      size: 0.5,
      sizeAttenuation: false,
    }),
    new THREE.PointsMaterial({
      color: 0x333333,
      size: 1,
      sizeAttenuation: false,
    }),
    new THREE.PointsMaterial({
      color: 0x3a3a3a,
      size: 0.5,
      sizeAttenuation: false,
    }),
    new THREE.PointsMaterial({
      color: 0x1a1a1a,
      size: 1,
      sizeAttenuation: false,
    }),
    new THREE.PointsMaterial({
      color: 0x1a1a1a,
      size: 0.5,
      sizeAttenuation: false,
    }),
  ]
  let points = []
  for (let i = 10; i < 20; i++) {
    stars = new THREE.Points(starsGeometry, starsMaterials[i % 6])
    stars.rotation.x = Math.random() * 6
    stars.rotation.y = Math.random() * 6
    stars.rotation.z = Math.random() * 6
    stars.scale.setScalar(i * 10)
    stars.matrixAutoUpdate = false
    stars.updateMatrix()
    points.push(stars)
  }
  return points
}

export async function svg() {
  const sun = await loadSVG(sunSVG, {
    position: [0, 40, -500],
    scale: 0.11,
    name: "sun",
  })
  const cityFar = await loadSVG(cityFarSVG, {
    position: [0, 15, -450],
    scale: 0.4,
    name: "cityFar",
  })
  const cityClose = await loadSVG(cityCloseSVG, {
    position: [0, 28, -300],
    scale: 0.2,
    name: "cityClose",
  })
  return { sun, cityFar, cityClose }
}

export function updateGridShader(shader, speed) {
  shader.uniforms.speed = {
    value: speed,
  }
  shader.uniforms.time = {
    value: 0,
  }
  shader.vertexShader =
    `uniform float speed;
		  uniform float time;
			varying vec3 vPos;
      ` + shader.vertexShader

  shader.vertexShader = shader.vertexShader.replace(
    `#include <begin_vertex>`,
    `#include <begin_vertex>
				vec2 tuv = uv;
				float t = time * 0.001 * speed;
				vPos = transformed;
				`
  )
  shader.fragmentShader =
    ` uniform float speed;
			uniform float time;
			varying vec3 vPos;
			float line(vec3 position, float width, vec3 step){
				vec3 tempCoord = position / step;
				vec2 coord = tempCoord.xz;
				coord.y -= time * speed / 2.;
				vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord * width);
				float line = min(grid.x, grid.y);
				return min(line, 1.0);
			}
			` + shader.fragmentShader
  shader.fragmentShader = shader.fragmentShader.replace(
    `gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    `   float l = line(vPos, 1.0, vec3(2.0)); // grid line width
				vec3 base = mix(vec3(0, 0.75, 0), vec3(0), smoothstep(0., 0., abs(vPos.x))); //ROAD COLOR
				vec3 c = mix(outgoingLight, base, l);
				gl_FragColor = vec4(c, diffuseColor.a);
				`
  )
  return shader
}

function updateObjectShader(
  speed,
  shader,
  value1,
  value2,
  transformedY = "1.",
  scale = "3.",
  wantFlip = false
) {
  let transformedX = ""
  if (wantFlip) {
    transformedX = "transformed.x *= sign(instPosition.x);"
  }

  shader.uniforms.speed = {
    value: speed,
  }
  shader.uniforms.time = {
    value: 0,
  }
  shader.vertexShader =
    ` uniform float speed;
    	uniform float time;
    	attribute vec3 instPosition;
    	` + shader.vertexShader
  shader.vertexShader = shader.vertexShader.replace(
    `#include <begin_vertex>`,
    `#include <begin_vertex>
            ${transformedX}
    		vec3 ip = instPosition;
    		ip.z = mod(ip.z + time * speed, ${value1}.) - ${value2}.; //ip.z = mod(ip.z + time * 15., 1250.) - 1100.;
            transformed *= ${scale};
            transformed.y *= ${transformedY};
    		transformed += ip;
    		`
  )
  return shader
}
