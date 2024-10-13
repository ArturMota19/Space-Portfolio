// Components
import Header from '../../basics/Header/Header';
import Traveler from '../Traveler/Traveler';
import Stars from '../Stars/Stars';
// Images

// Imports
// Styles
import s from './Portfolio.module.css'


export default function Portfolio() {
  return (
    <main className={s.portfolioWrapper}>
      <Header/>
      <Traveler/>
      <Stars/>
    </main>
  );
}