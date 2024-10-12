// Components
import GalaxyBg from '../../basics/Galaxy/Galaxy.tsx';
// Images

// Imports

// Styles
import s from './Traveler.module.css'

export default function Traveler() {

  return (
    <section className={s.travelerWrapper}>
      <div className={s.internWrapper}>
        <GalaxyBg/>
        <div className={s.travelerInfo}>
          <h2>O Viajante</h2>
          <p>dfgdfgdfg</p>
        </div>
      </div>
    </section>
  );
}
