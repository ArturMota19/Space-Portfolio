// Components

// Images

// Imports

// Styles
import s from './Stars.module.css'

export default function StarsComponent({title, img}:{title: string, img: string}) {
  return (
    <div className={s.eachStar}>
      <p>{title}</p>
      <img src={img} alt={`${title} Icon`}/>
    </div>
  );
}