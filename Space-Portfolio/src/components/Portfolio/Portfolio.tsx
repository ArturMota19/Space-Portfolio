// Components
import Header from '../../basics/Header/Header';
// Images

// Imports
// Styles
import s from './Portfolio.module.css'
import Traveler from '../Traveler/Traveler';

export default function Portfolio() {
  return (
    <main className={s.portfolioWrapper}>
      <Header/>
      <Traveler/>
    </main>
  );
}