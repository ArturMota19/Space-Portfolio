// Components
import GalaxyBg from '../../basics/Galaxy/Galaxy.tsx';
// Images
import Artur from '/public/Artur.jpeg'
// Imports

// Styles
import s from './Traveler.module.css'

export default function Traveler() {

  return (
    <section className={s.travelerWrapper}>
      <div className={s.internWrapper}>
        <GalaxyBg/>
        <section className={s.wrapperTraveler}>
          <div className={s.travelerInfo}>
            <h2>O Viajante</h2>
            <p>Minha trajetória teve início na UFBA - Universidade Federal da Bahia.</p>
            <p>Foi lá que ingressei na InfoJr, a Empresa Júnior de Computação da UFBA, onde fiz grandes amizades e adquiri os fundamentos do que sei hoje.</p>
            <p>Logo em seguida, fui contratado pela Reis Softwares, onde enfrentei desafios que me permitiram aprimorar minhas habilidades.</p>
            <p>Fiz parte também no Tomorrow - Centro de Capacitação da UFBA, atuando como Professor Auxiliar e lecionando tecnologia.</p>
            <p>Atualmente atuo como Desenvolvedor FullStack, com habilidades em ReactJs, NextJs, NodeJs, Python, C++, entre outras tecnologias.</p>
          </div>
          <img src={Artur} alt='Foto de Artur'/>
        </section>
      </div>
    </section>
  );
}
