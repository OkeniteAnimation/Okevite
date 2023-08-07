/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 /Users/baptiste/viewer_3d-1/public/model.glb -o /Users/baptiste/viewer_3d-1/public/model.tsx --types 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    angleterre003: THREE.Mesh
  }
  materials: {
    rastMat: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.angleterre003.geometry} material={materials.rastMat} />
    </group>
  )
}

useGLTF.preload('/model.glb')