import React, {useState} from 'react';
import {Canvas} from '@react-three/fiber/native';
import Box from './Objects/Box';

enum MeshActivated {
  MESH_1 = 'mesh-1',
  MESH_2 = 'mesh-2',
}

export default function App() {
  const [meshActive, setMeshActive] = useState('');

  const changeMashActive = (mesh: MeshActivated) => {
    if (meshActive === mesh) {
      setMeshActive('');
      return;
    }
    setMeshActive(mesh);
  };

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box
        isActive={meshActive === MeshActivated.MESH_1}
        setActive={() => changeMashActive(MeshActivated.MESH_1)}
        position={[-1.2, 0, 0]}
      />
      <Box
        isActive={meshActive === MeshActivated.MESH_2}
        setActive={() => changeMashActive(MeshActivated.MESH_2)}
        position={[1.2, 0, 0]}
      />
    </Canvas>
  );
}
