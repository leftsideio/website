import * as THREE from "three"
import create from "zustand"
import produce, { setAutoFreeze } from "immer"
import * as _build from "~/components/3d/_build"

setAutoFreeze(false)

const immer = config => (set, get, api) => config(fn => set(produce(fn)), get, api)

const useStore = create(
  immer((set, get) => {
    return {
      sound: false,
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
            // const { synthwave } = get()
            // synthwave.clock.start()
            const speed = get().speed
            const svgObject = await _build.svg()
            const roadlines = _build.roadlines()
            const sidewalk = _build.sidewalk()
            const stars = _build.sky()
            const pyramids = _build.pyramids(speed)
            const palms = _build.palms(speed)
            set(state => {
              state.synthwave.camera = camera
              state.synthwave.svg = svgObject
              state.synthwave.geometry = { roadlines, sidewalk, stars, pyramids, palms }
            })
          },
          createGridMaterial(shader) {
            const update = _build.updateGridShader(shader, get().speed)
            set(state => void state.synthwave.shaders.push(update))
          },
        },
      },
    }
  })
)

export default useStore
