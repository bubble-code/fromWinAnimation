import * as THREE from 'three'
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f';
import { getProject } from '@theatre/core'


import { Canvas } from '@react-three/fiber'
// import { PerspectiveCamera } from '@react-three/r3f'

studio.initialize()
studio.extend(extension)
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

export const Animation = () => {
  return (
    <Canvas >
      <SheetProvider sheet={getProject('Demo Project').sheet('Demo Sheet')}>
        <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75} />
        <ambientLight />
        <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
        <e.mesh theatreKey="Cube">
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </e.mesh>
      </SheetProvider>
    </Canvas>
  )
}
