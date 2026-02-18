"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export function BlockMesh() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} scale={1.5}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
                color="#8b5cf6"
                wireframe
                emissive="#4c1d95"
                emissiveIntensity={0.5}
            />
        </mesh>
    );
}
