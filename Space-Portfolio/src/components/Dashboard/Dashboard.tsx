/* eslint-disable react-hooks/exhaustive-deps */
// Imports
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
// @ts-expect-error: GLTFLoader is not typed in the three.js module
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-expect-error: OrbitControls is not typed in the three.js module
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useNavigate } from 'react-router-dom';
// Images
import gasIcon from '/gasIcon.svg'
import worldIcon from '/worldIcon.svg'
import rocketIcon from '/rocketIcon.svg'
import graphIcon from '/graphIcon.svg'
import mouseIcon from '/mouseClick.svg'
// Styles
import s from './Dashboard.module.css';


export default function Dashboard() {
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
  let controls: OrbitControls;
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(0);
  const isAnimatingRef = useRef(false); 

  const arrayOptions = [
    { 
      name: 'Abastecer Aeronave', 
      icon: gasIcon, 
      text: `<h1 class="${s.wrapperTextH1}">Desenvolver-se é como explorar o vasto universo.</h1>`
    },
    { 
      name: 'Calcular Trajeto', 
      icon: worldIcon, 
      text: `<p class="${s.wrapperTextP}">Cada planeta visitado representa uma experiência profissional única, em que aprendi e cresci. As estrelas no céu são os conhecimentos e habilidades que adquiri na minha jornada, iluminando novas possibilidades.</p>` 
    },
    { 
      name: 'Configurar Sistemas', 
      icon: graphIcon, 
      text: `<p class="${s.wrapperTextP}">Explorar o desconhecido é o que me motiva. Cada desafio superado, seja em novos projetos ou na implementação de soluções, me leva além dos limites conhecidos.</p>` 
    },
    { 
      name: 'DESBRAVAR', 
      icon: rocketIcon, 
      text: `<h1 class="${s.wrapperTextWithoutAnimation}">Bem-vindo(a) à minha jornada de exploração.</h1>` 
    },
  ];
  

  function incrementOption(){
    if(selectedOption < 3 ){
      setSelectedOption(selectedOption + 1)
    }else{
      if(isAnimatingRef.current) return
      isAnimatingRef.current = true;
      // make an animation on the text
      const textElement = document.querySelector(`.${s.wrapperText} div`);
      if (textElement) {
        textElement.classList.add(s.animateText);
        setTimeout(() => {
          navigate("/portfolio")
        }, 7500); // Duration of the animation
      }
    }
  }

  function newScene() {    
    const loader = new GLTFLoader();
    // path to make the skybox
    const path = "/skybox/";
    // array to map the textures
    const textCubeMap = [ 
      path + "right.png", 
      path + "left.png",
      path + "top.png", 
      path + "bottom.png",
      path + "front.png", 
      path + "back.png"
    ];
    // load the textures and set the background
    const textureCube = new THREE.CubeTextureLoader().load(textCubeMap, () => {
      textureCube.mapping = THREE.CubeReflectionMapping;
      scene.background = textureCube;
    });
    // laoder to GLTF Scene
    loader.load(
      'Space/scene.gltf',
      (gltf: GLTF) => {
        const gltfObject = gltf.scene;
        gltfObject.name = 'Scene';
  
        const boundingBox = new THREE.Box3().setFromObject(gltfObject);
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        gltfObject.position.sub(center); 
  
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        const cameraZ = Math.abs(maxDim / 4 * Math.tan(fov * 2));
  
        camera.position.set(20, 0, cameraZ);
        camera.lookAt(gltfObject.position);
  
        scene.add(gltfObject);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2); 
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);
      },
      undefined,
      (error: GLTFError) => {
        console.error('Erro no modelo:', error);
      }
    );
  }
  
  // render the scene, update every frame (i think)
  function render() {
    controls.update();
    renderer.render(scene, camera);
    // rotate the model
    const gltfObject = scene.getObjectByName('Scene');
    if (gltfObject) {
      gltfObject.rotation.y += 0.005;
      if (isAnimatingRef.current) {
        gltfObject.position.x += 0.05;
        gltfObject.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.transparent = true;
            child.material.opacity -= 0.001;
          }
        });
      }
    }
    
    requestAnimationFrame(render);
  }
  function main() {
    // create the renderer, scene, camera and controls
    // and add the scene to the renderer
    // use the ref to get the container
    const container = containerRef.current;
    if (!container || container.hasChildNodes()) return;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    controls = new OrbitControls(camera, renderer.domElement);
    
    newScene();
    render();
  }
  

  useEffect(() => {
    main();
    return () => {
      // if i already have a renderer, dispose it
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);



  return (
    <main>
      <div className={s.ambientAbsolut}>
        <img src={mouseIcon} alt='click icon'/>
        <p>Ambiente Interativo</p>
      </div>
      <div className={s.buttonDiv}>
        <button disabled={isAnimatingRef.current} onClick={() => incrementOption()}>
          <img src={arrayOptions[selectedOption].icon} alt="CHANGE LATER" />
          <p>{arrayOptions[selectedOption].name}</p>
        </button>
      </div>
      <section className={s.initialMessageWrapper}>
        <div className={s.wrapperText}>
            <div dangerouslySetInnerHTML={{ __html: arrayOptions[selectedOption].text || '' }} />
        </div>
      </section>
      <div ref={containerRef} className={s.canvasContainer}></div>
    </main>
  );
}
