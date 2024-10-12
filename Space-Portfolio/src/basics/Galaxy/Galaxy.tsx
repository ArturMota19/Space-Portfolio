import * as THREE from 'three';
// @ts-expect-error: GLTFLoader is not typed in the three.js module
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef } from 'react';
import s from '../../components/Portfolio/Portfolio.module.css';

export default function GalaxyBg() {
  interface GLTF {
    scene: THREE.Group;
  }
  interface GLTFError {
    error: Error;
  }

  const containerRef = useRef<HTMLDivElement | null>(null);
  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;

  function newScene() {
    const loader = new GLTFLoader();
    loader.load(
      'spaceship/scene.gltf',
      (gltf: GLTF) => {
        const gltfObject = gltf.scene;
        gltfObject.name = 'Scene';

        camera.position.set(1, 0, 1.75);
        camera.lookAt(gltfObject.position)
        scene.add(gltfObject);

        const ambientLight = new THREE.AmbientLight(0xffffff, 5);
        scene.add(ambientLight);

      },
      undefined,
      (error: GLTFError) => {
        console.error('Erro no modelo:', error);
      }
    );
  }

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    scene.rotation.y += 0.001;

  }

  function main() {
    const container = containerRef.current;
    if (!container || container.hasChildNodes()) return;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(350, 350);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);


    window.addEventListener('resize', () => {
      camera.updateProjectionMatrix();
      renderer.setSize(350, 350);
    });

    newScene();
    render();
  }

  useEffect(() => {
    main();
    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={s.galaxyWrapper} />
  );
}
