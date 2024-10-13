// Components

// Images

// Imports

// Styles
import RenderGLTF from '../../basics/RenderGLTF/RenderGLTF'
import s from './Stars.module.css'
import StarsComponent from './StarsComponent';

export default function Stars() {
  return (
    <section className={s.wrapperStars}>
      <RenderGLTF path={"star/scene.gltf"} position={[1, 0, 1.75]}/>
      <div className={s.internStars}>
        <h2>Estrelas</h2>
        <div className={s.stars}>
          <StarsComponent title="HTML" img="techIcons/html.svg"/>
          <StarsComponent title="CSS" img="techIcons/css.svg"/>
          <StarsComponent title="SASS" img="techIcons/sass.svg"/>
          <StarsComponent title="Tailwind" img="techIcons/tailwind.svg"/>
          <StarsComponent title="JavaScript" img="techIcons/js.svg"/>
          <StarsComponent title="React" img="techIcons/react.svg"/>
          <StarsComponent title="Next" img="techIcons/next.svg"/>
          <StarsComponent title="Node" img="techIcons/node.svg"/>
          <StarsComponent title="TypeScript" img="techIcons/typescript.svg"/>
          <StarsComponent title="Python" img="techIcons/python.svg"/>
          <StarsComponent title="Figma" img="techIcons/figma.svg"/>
        </div>
      </div>
    </section>
  );
}