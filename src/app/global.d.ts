declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

import type React from 'react';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        meshLineGeometry: any;
        meshLineMaterial: any;
      }
    }
  }
}

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}