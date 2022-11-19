import React, {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber/native';

interface Props {
  isActive: boolean;
  setActive(isActive: boolean): void;
}

export default function Box(props: Props) {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    if (!props.isActive) {
      return (mesh.current.rotation.x += 0.01);
    }
    return (mesh.current.rotation.x -= 0.01);
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={props.isActive ? 1.5 : 1}
      onClick={props.setActive}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.isActive ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
