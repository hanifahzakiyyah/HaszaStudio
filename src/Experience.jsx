import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { Model } from './Model';

export default function Experience() {
    const { camera } = useThree();
    

    return (
        <>
        
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Model />

            
        </>
    );
}
