import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import EarthModel from './EarthModel'

export default function Globe3D() {
    return (
        <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 3], fov: 55 }}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <EarthModel />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    )
}