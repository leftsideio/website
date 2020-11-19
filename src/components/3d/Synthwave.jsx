import * as THREE from "three"
import { useRef } from "react"
import { Canvas, useFrame, useThree, extend } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import styled from "styled-components"
import useStore from "~/store"

extend({ OrbitControls })

function CameraControls() {
  const { camera, gl } = useThree()
  const controls = useRef()
  useFrame(() => {
    controls.current.update()
  })
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enablePan={false}
      minDistance={5}
      maxDistance={7}
      target={[0, 1.8, 0]}
      maxPolarAngle={Math.PI * 0.55}
      minPolarAngle={Math.PI * 0.25}
    />
  )
}

function Floor() {
  const store = useStore(state => state.synthwave)
  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]} translate={[0, 110, 0]}>
      <planeBufferGeometry args={[300, 300, 0, 0]} />
      <meshBasicMaterial
        color="#ff1e99"
        onBeforeCompile={store.actions.createGridMaterial}
      />
    </mesh>
  )
}

function Road() {
  const store = useStore(state => state.synthwave)
  // currently runs all animation
  useFrame(state => {
    store.actions.animate(state.clock.getElapsedTime())
  })

  if (!store.geometry.roadlines) return null

  return (
    <group>
      <mesh rotation={[-Math.PI * 0.5, 0, 0]} translate={[0, 110, 0.1]}>
        <planeBufferGeometry args={[12, 300, 0, 0]} />
        <meshBasicMaterial color="#03353b" transparent opacity={0.7} />
      </mesh>
      <mesh geometry={store.geometry.roadlines}>
        <meshBasicMaterial color="#fff" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function Sidewalk() {
  const store = useStore(state => state.synthwave)
  if (!store.geometry.sidewalk) return null
  return (
    <mesh geometry={store.geometry.sidewalk}>
      <meshBasicMaterial
        color="#1be9ff"
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
        onBeforeCompile={store.actions.createGridMaterial}
      />
    </mesh>
  )
}

function Pyramids() {
  const store = useStore(state => state.synthwave)
  if (!store.geometry.pyramids) return null
  return (
    <group dispose={null}>
      <primitive object={store.geometry.pyramids.children[0]} />
      <primitive object={store.geometry.pyramids.children[1]} />
    </group>
  )
}
function Palms() {
  const store = useStore(state => state.synthwave)
  if (!store.geometry.palms) return null
  return <primitive object={store.geometry.palms} dispose={null} />
}

function Sky() {
  const store = useStore(state => state.synthwave)
  if (!store.geometry.stars) return null
  return (
    <group dispose={null}>
      {store.geometry.stars.map((star, i) => (
        <primitive key={i} object={star} />
      ))}
    </group>
  )
}

function Sun() {
  const store = useStore(state => state.synthwave)
  if (!store.svg.sun) return null
  return (
    <group position={store.svg.sun.position} scale={store.svg.sun.scale} dispose={null}>
      {store.svg.sun.children.map((el, i) => (
        <mesh key={i} material={el.material} geometry={el.geometry} />
      ))}
    </group>
  )
}
function CityFar() {
  const store = useStore(state => state.synthwave)
  if (!store.svg.cityFar) return null
  return (
    <group
      position={store.svg.cityFar.position}
      scale={store.svg.cityFar.scale}
      dispose={null}
    >
      {store.svg.cityFar.children.map((el, i) => (
        <mesh key={i} material={el.material} geometry={el.geometry} />
      ))}
    </group>
  )
}
function CityClose() {
  const store = useStore(state => state.synthwave)
  if (!store.svg.cityClose) return null
  return (
    <group
      position={store.svg.cityClose.position}
      scale={store.svg.cityClose.scale}
      dispose={null}
    >
      {store.svg.cityClose.children.map((el, i) => (
        <mesh key={i} material={el.material} geometry={el.geometry} />
      ))}
    </group>
  )
}
export default function Scene() {
  const store = useStore(state => state.synthwave)
  return (
    <Container>
      <Canvas
        pixelRatio={window.devicePixelRatio}
        gl={{ antialias: true }}
        camera={{
          aspect: 480 / 360,
          fov: 75,
          near: 0.1,
          far: 2000,
          position: [0, 1.8, 7],
        }}
        onCreated={({ scene, camera }) => {
          scene.background = new THREE.Color("#000009")
          store.actions.init(camera)
        }}
      >
        <CameraControls />
        <Sun />
        <CityFar />
        <CityClose />
        <Floor />
        <Road />
        <Sidewalk />
        <Pyramids />
        <Palms />
        <Sky />
      </Canvas>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  bottom: 36rem;
  left: 50%;
  transform: translateX(-50%);
  width: 480px;
  height: 360px;
  /* height: 100vh;
  width: 100vw; */
`
