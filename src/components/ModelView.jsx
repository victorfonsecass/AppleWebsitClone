import { PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"

{/*Make changes to the 3D models will display on screen */}
const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      {/* Camera that simulates human eye */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />
      
    </View>
  )
}

export default ModelView
