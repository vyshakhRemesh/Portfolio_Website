import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          // color="#DB8B9B"
          color="#21e0da"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>

      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};

export default Shape;
