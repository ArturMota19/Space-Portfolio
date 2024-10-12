import { useState } from 'react';

// Imports
import travel from '/travel.svg';
import stars from '/star.svg';
import planet from '/planet.svg';
import orangeTravel from '/orangeTravel.svg';
import orangeStars from '/orangeStar.svg';
import orangePlanet from '/orangePlanet.svg';
import linkedin from '/linkedin.svg';
import github from '/github.svg';
import email from '/email.svg';
// Styles
import s from './Header.module.css';

export default function Header() {
  const [currentTravelIcon, setCurrentTravelIcon] = useState(orangeTravel);
  const [currentStarsIcon, setCurrentStarsIcon] = useState(orangeStars);
  const [currentPlanetIcon, setCurrentPlanetIcon] = useState(orangePlanet);

  return (
    <header className={s.headerWrapper}>
      <nav className={s.navbar}>
        <div 
          className={s.eachNavLink}
        >
          <img src={currentTravelIcon} alt='Viajante' className={s.navIcon} />
          <p
            onMouseEnter={() => setCurrentTravelIcon(travel)}
            onMouseLeave={() => setCurrentTravelIcon(orangeTravel)}
          >Viajante</p>
        </div>

        <div 
          className={s.eachNavLink}
        >
          <img src={currentStarsIcon} alt='Estrelas' className={s.navIcon} />
          <p
            onMouseEnter={() => setCurrentStarsIcon(stars)}
            onMouseLeave={() => setCurrentStarsIcon(orangeStars)}
          >Estrelas</p>
        </div>

        <div 
          className={s.eachNavLink}
        >
          <img src={currentPlanetIcon} alt='Planetas' className={s.navIcon} />
          <p
            onMouseEnter={() => setCurrentPlanetIcon(planet)}
            onMouseLeave={() => setCurrentPlanetIcon(orangePlanet)}
          >Planetas</p>
        </div>
      </nav>
      <div className={s.socialLinks}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={github} alt='Github'/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='Linkedin'/>
        </a>
        <a href="mailto:example@example.com">
          <img src={email} alt='Email'/>
        </a>
      </div>

    </header>
  );
}
