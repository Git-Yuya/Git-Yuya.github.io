import React from 'react';
import FloatingCube from './FloatingCube';

const NUM_CUBES = 10;

const FloatingCubes: React.FC = () => (
  <>
    {Array.from({ length: NUM_CUBES }).map((_, i) => (
      <FloatingCube key={i} index={i} />
    ))}
  </>
);

export default FloatingCubes;
