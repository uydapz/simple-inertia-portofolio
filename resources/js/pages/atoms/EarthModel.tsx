import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function EarthModel() {
    const { scene } = useGLTF('/3d/earth.glb');
    const ref = useRef<THREE.Group>(null!);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        scene.position.sub(center);

        const maxAxis = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxAxis;

        ref.current.scale.setScalar(scale);
    }, [scene]);

    return (
        <group ref={ref}>
            <primitive object={scene} />
        </group>
    );
}
