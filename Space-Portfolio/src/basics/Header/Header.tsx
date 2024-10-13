import { useState, useEffect } from 'react';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 && isScrolled === false) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${s.headerWrapper}`}>
      <nav className={`${s.navbar} ${isScrolled ? s.scrolled : ''}`}>
        <div className={s.eachNavLink}>
          <img src={currentTravelIcon} alt='Viajante' className={s.navIcon} />
            <a href="/portfolio#traveler">
            <p
              onMouseEnter={() => setCurrentTravelIcon(travel)}
              onMouseLeave={() => setCurrentTravelIcon(orangeTravel)}
            >Viajante</p>
            </a>
        </div>

        <div className={s.eachNavLink}>
          <img src={currentStarsIcon} alt='Estrelas' className={s.navIcon} />
            <a href="/portfolio#stars">
            <p
              onMouseEnter={() => setCurrentStarsIcon(stars)}
              onMouseLeave={() => setCurrentStarsIcon(orangeStars)}
            >Estrelas</p>
            </a>
        </div>

        <div className={s.eachNavLink}>
          <img src={currentPlanetIcon} alt='Planetas' className={s.navIcon} />
            <a href="/portfolio#planets">
            <p
              onMouseEnter={() => setCurrentPlanetIcon(planet)}
              onMouseLeave={() => setCurrentPlanetIcon(orangePlanet)}
            >Planetas</p>
            </a>
        </div>
      </nav>
      <div className={s.socialLinks}>
        <a href="https://github.com/ArturMota19" target="_blank" rel="noopener noreferrer">
          <img src={github} alt='Github'/>
        </a>
        <a href="https://www.linkedin.com/in/artur-mota-913b9a235/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='Linkedin'/>
        </a>
        <a href="mailto:artur19rodriguesmota@gmail.com">
          <img src={email} alt='Email'/>
        </a>
      </div>
    </header>
  );
}
