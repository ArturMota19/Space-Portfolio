// Components

// Images

// Imports

// Styles
import RenderGLTF from '../../basics/RenderGLTF/RenderGLTF'
import s from './Stars.module.css'

export default function Stars() {
  return (
    <section className={s.wrapperStars}>
      <RenderGLTF path={"star/scene.gltf"} position={[1, 0, 1.75]}/>
      <h1>Stars</h1>
    </section>
  );
}