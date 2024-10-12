// Components

// Images

// Imports

// Styles
import s from './Header.module.css'

export default function Header() {
  return (
    <header className={s.headerWrapper}>
      <nav className={s.navbar}>
        <p>Viajante</p>
        <p>Estrelas</p>
        <p>Planetas</p>
      </nav>
    </header>
  );
}