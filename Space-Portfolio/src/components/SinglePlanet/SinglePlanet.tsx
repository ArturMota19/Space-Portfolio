// Components
import Header from "../../basics/Header/Header";
import RenderGLTF from "../../basics/RenderGLTF/RenderGLTF";
// Images

// Imports
import { useEffect, useState } from "react";
// Styles
import s from "./SinglePlanet.module.css";

export default function SinglePlanet() {
  const params = new URLSearchParams(window.location.search);
  const planet = params.get('id');
  const [planetData, setPlanetData] = useState<{
    img: string;
    company: string;
    time: string;
    path: string;
    position: number[];
    roles: string[];
    skills: string;
    overview: string;
  }>({
    img: "",
    company: "",
    time: "",
    path: "",
    position: [0, 0, 0],
    roles: [],
    skills: "",
    overview: "",
  });

  useEffect(() => {
    if (planet === "tomorrow") {
      setPlanetData({
        img: '/tomorrowPhoto.jpeg',
        path: "tomorrowPlanet/scene.gltf",
        company: "Tomorrow - Centro de Pesquisa e Capacitação",
        time: "Agosto de 2024 à Dezembro de 2024",
        position: [220, 0, 0],
        roles: ["Professor Auxiliar"],
        skills:
          "Gestão de sala de aula, Planejamento de aulas, Desenvolvimento de Material Didático, Ensino de Programação, Ensino de Lógica de Programação, Ensino de Desenvolvimento Web",
        overview:
          "Durante o período em que estive na Tomorrow, pude desenvolver habilidades de gestão de sala de aula, planejamento de aulas, desenvolvimento de material didático e ensino de programação, lógica de programação e desenvolvimento web.",
      });
    } else if (planet === "reis") {
      setPlanetData({
        img: '/reisPhoto.jpeg',
        path: "reisPlanet/scene.gltf",
        company: "Reis Softwares",
        time: "Agosto de 2022 até o momento",
        position: [270, 0, 0],
        roles: [
          "Supervisor Front-End",
          "Desenvolvedor Front-End",
          "Estagiário",
        ],
        skills:
          "Desenvolvimento Front-End, Desenvolvimento Back-End, Supervisão de Estagiários, Integração de APIs, Revisão de Código, Mentoria de Novos Desenvolvedores",
        overview:
          "Durante o período em que estive na Reis Softwares, pude desenvolver habilidades de desenvolvimento front-end e back-end, supervisão de estagiários, integração de APIs, revisão de código e mentoria de novos desenvolvedores.",
      });
    } else {
      setPlanetData({
        img: '/infoPhoto.png',
        path: "infoPlanet/scene.gltf",
        company: "Info Júnior - Empresa Jr de Computação da UFBA",
        time: "Abril de 2022 à Setembro de 2023",
        position: [1.75, 0, 0],
        roles: ["Gerente de Projetos", "Desenvolvedor Web", "Trainee"],
        skills:
          "Trabalho em Equipe, Gestão de Tempo, Comunicação, Desenvolvimento Web, Desenvolvimento Front-End Avançado, Gestão de Equipe, SCRUM, Metodologias Ágeis, Planejamento de Projeto",
        overview:
          "Durante o período em que estive na Info Júnior, passei pelo processo de trainee, no qual fiz o núcleo de desenvolvimento WEB e criei fundamentos essenciais para a área. Após efetivado, atuei como desenvolvedor Front-End, onde pude aprimorar minhas habilidades. Posteriormente, fui promovido a Gerente de Projetos, cargo este que me auxiliou a desenvolver habilidades de liderança e gestão de equipe.",
      });
    }
  }, [planet]);

  return (
    <main className={s.singlePlanetWrapper}>
      <Header />
      <section className={s.wrapperIndividualPlanet}>
        <h1>{planetData.company}</h1>
        {planetData.path && (
              <div className={s.planetDiv}>
                <RenderGLTF
                path={planetData.path}
                position={planetData.position}
                />
              </div>
            )}
        <div className={s.wrapperDownDiv}>
          <img src={planetData.img} alt={`Foto ${planet}`}/>
          <div className={s.planetInfos}>
            <h2>Duração</h2>
            <p>{planetData.time}</p>
            <h2>Cargos</h2>
            <ul>
              {planetData.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
            <h2>Competências</h2>
            <p>{planetData.skills}</p>
            <h2>Resumo</h2>
            <p>{planetData.overview}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
