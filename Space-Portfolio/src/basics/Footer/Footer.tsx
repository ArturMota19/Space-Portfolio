// Components

// Images
import linkedin from '/linkedin.svg';
import github from '/github.svg';
import email from '/email.svg';
// Imports

// Styles
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footerWrapper}>
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
    </footer>
  );
}