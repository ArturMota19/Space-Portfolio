// Components

// Images

// Imports

// Styles
//import RenderGLTF from '../../basics/RenderGLTF/RenderGLTF'
import s from './Planets.module.css'
import PlanetsComponent from './PlanetsComponent';

export default function Planets() {
  return (
    <section className={s.wrapperPlanets}>
      <div className={s.internPlanets}>
        <h2>Planetas</h2>
        <PlanetsComponent 
          path={'tomorrowPlanet/scene.gltf'} 
          company={'Tomorrow - Centro de Pesquisa e Capacitação'} 
          time={'Agosto de 2024 à Dezembro de 2024'} 
          position={[220,0,0]}
          link={"tomorrow"} 
        />
        <PlanetsComponent 
          path={'reisPlanet/scene.gltf'} 
          company={'Reis Softwares'} 
          time={'Agosto de 2022 até o momento'} 
          position={[270,0,0]} 
          link={"reis"}
        />
        <PlanetsComponent 
          path={'infoPlanet/scene.gltf'} 
          company={'Info Júnior - Empresa Jr de Computação da UFBA'} 
          time={'Abril de 2022 à Setembro de 2023'}
          position={[1.75,0,0]} 
          link={"info"}
        />
      </div>
    </section>
  );
}