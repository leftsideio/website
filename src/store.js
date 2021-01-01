import * as THREE from "three"
import create from "zustand"
import produce, { setAutoFreeze } from "immer"
import * as _build from "~/components/3d/_build"

setAutoFreeze(false)

const immer = config => (set, get, api) => config(fn => set(produce(fn)), get, api)

const useStore = create(
  immer((set, get) => {
    return {
      setter: set,
      sound: false,
      mode: "light",
      synthwave: {
        camera: undefined,
        clock: new THREE.Clock(false),
        speed: 15,
        shaders: [],
        geometry: {
          roadlines: null,
          sidewalk: null,
          pyramids: null,
          palms: null,
          stars: null,
        },
        svg: {
          sun: null,
          cityFar: null,
          cityClose: null,
        },
        actions: {
          async init(camera) {
            const { synthwave } = get()
            synthwave.clock.start()
            const props = { speed: synthwave.speed, cb: synthwave.actions.addShader }
            const svgObject = await _build.svg()
            const roadlines = _build.roadlines()
            const sidewalk = _build.sidewalk()
            const stars = _build.sky()
            const pyramids = _build.pyramids(props)
            const palms = _build.palms(props)
            set(state => {
              state.synthwave.camera = camera
              state.synthwave.svg = svgObject
              state.synthwave.geometry = { roadlines, sidewalk, stars, pyramids, palms }
            })
          },
          addShader(shader) {
            set(state => void state.synthwave.shaders.push(shader))
          },
          createGridMaterial(shader) {
            const update = _build.updateGridShader(shader, get().speed)
            get().synthwave.actions.addShader(update)
          },
          animate(time) {
            get().synthwave.shaders.forEach(m => {
              m.uniforms.time.value = time
            })
          },
        },
      },
    }
  })
)

export default useStore
