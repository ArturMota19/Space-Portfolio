// Components
import Header from '../../basics/Header/Header';
import Traveler from '../Traveler/Traveler';
import Stars from '../Stars/Stars';
import Planets from '../Planets/Planets';
// Images

// Imports
// Styles
import s from './Portfolio.module.css'
import Footer from '../../basics/Footer/Footer';



export default function Portfolio() {
  return (
    <main className={s.portfolioWrapper}>
      <Header/>
      <Traveler/>
      <Stars/>
      <Planets/>
      <Footer/>
    </main>
  );
}