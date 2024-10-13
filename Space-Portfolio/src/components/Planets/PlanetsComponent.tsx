// Components

// Images
import rocketIcon from '/whiteRocket.svg'
// Imports

// Styles
import RenderGLTF from '../../basics/RenderGLTF/RenderGLTF'
import s from './Planets.module.css'

export default function PlanetsComponent({ path, company, time, position, link } : {path: string, company: string, time: string, position: number[], link: string}) {
  return (
    <section className={s.wrapperPlanetsEach}>
      <RenderGLTF path={path} position={position}/>
      <div className={s.infoWrapper}>
        <div>
          <h4>{company}</h4>
          <h5>{time}</h5>
        </div>
        <a href={`/planet/${link}`}>
          <button>
            <img src={rocketIcon} alt='Foguete'/>
            <p>EXPLORAR</p>
          </button>
        </a>
      </div>
    </section>
  );
}