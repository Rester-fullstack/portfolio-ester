import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import Header from "../components/Header/Header";
import PageTransition from "../components/PageTransition/PageTransition";
import SEO from "../components/SEO/SEO";
import "./Projetos.css";


/* ========================================
   TYPES
======================================== */

interface SelectedProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  stack: string;
  year: string;
  image: string;
  link: string;
}

interface ArchiveProject {
  number: string;
  title: string;
  category: string;
  year: string;
  link: string;
}


/* ========================================
   SELECTED PROJECTS
======================================== */

const selectedProjects: SelectedProject[] = [
  {
    id: "vita",
    number: "01",
    title: "VITA",
    subtitle: "SISTEMA DE GESTÃO CLÍNICA INTELIGENTE",
    category: "FULL STACK",
    stack: "C# / .NET 8 / REACT / TYPESCRIPT / SQL SERVER",
    year: "2026",
    image: "/projects/vita.png",

    link:
    "https://github.com/Rester-fullstack/VITA",
  },

  {
    id: "catalogo-cursos",
    number: "02",
    title: "CATÁLOGO",
    subtitle: "SISTEMA DE GERENCIAMENTO DE CURSOS",
    category: "FULL STACK",
    stack: "C# / .NET 8 / REACT / SQL SERVER",
    year: "2026",

    image:
    "/projects/catalogo-cursos.png",

    link:
    "https://github.com/Rester-fullstack/catalogo-cursos-fullstack",
  },

  {
    id: "foodkeeper",
    number: "03",
    title: "FOODKEEPER",
    subtitle: "SISTEMA DE GERENCIAMENTO DE ALIMENTOS",
    category: "FULL STACK",
    stack: ".NET 8 / REACT / SQL SERVER / EF CORE",
    year: "2025",

    image: "/projects/foodkeeper.png",

    link:
    "https://github.com/Rester-fullstack/FoodKeeper",
  },

  {
    id: "task-api",
    number: "04",

    title: "TASK API",

    subtitle:
    "API DE GERENCIAMENTO DE TAREFAS",

    category:
    "BACK-END",

    stack:
    "C# / .NET 9 / JWT / SQL SERVER",

    year:
    "2026",

    image:
    "/projects/task-api.png",

    link:
    "https://github.com/Rester-fullstack/aspnetcore-task-api",
  },
];


/* ========================================
   PROJECT ARCHIVE
======================================== */

const archiveProjects: ArchiveProject[] = [
  {
    number: "01",
    title: "REACT BLOG FIREBASE",
    category: "WEB APP",
    year: "2026",

    link:
      "https://github.com/Rester-fullstack/react-blog-firebase",
  },


  {
    number: "02",
    title: "AGENDA DE CONTATOS",
    category: "ASP.NET MVC",
    year: "2025",

    link:
      "https://github.com/Rester-fullstack/agenda-contatos-mvc",
  },

  {
    number: "04",
    title: "CONTROLE DE ESTOQUE",
    category: "DESKTOP",
    year: "2025",

    link:
      "https://github.com/Rester-fullstack/ControleEstoqueApp",
  },

];


/* ========================================
   COMPONENT
======================================== */

export default function Projetos() {

  const [
    activeProject,
    setActiveProject,
  ] = useState<SelectedProject | null>(null);


  const [
    mousePosition,
    setMousePosition,
  ] = useState({
    x: 0,
    y: 0,
  });


  const sectionRef =
    useRef<HTMLElement | null>(null);


  /* ========================================
     MOUSE POSITION
  ======================================== */

  useEffect(() => {

    function handleMouseMove(
      event: MouseEvent
    ) {

      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });

    }


    window.addEventListener(
      "mousemove",
      handleMouseMove
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };

  }, []);


  return (

    <PageTransition title="PROJETOS">

      <SEO
        title="Projetos — Ester da Costa Batista"
        description="Projetos de desenvolvimento de software utilizando C#, .NET, React, SQL Server e outras tecnologias."
      />

      <main className="projects-page">

        <Header />


        {/* =================================
            HERO
        ================================= */}

        <section className="projects-hero">

          <div className="projects-hero-top">

            <span>
              03 / PROJETOS
            </span>

            <span>
              SELECTED WORK
              <br />
              BY ESTER — 2026
            </span>

          </div>


          <motion.div
            className="projects-hero-title"

            initial={{
              opacity: 0,
              y: 60,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [
                0.76,
                0,
                0.24,
                1,
              ],
            }}
          >

            <span className="projects-kicker">
              DEVELOPMENT / DIGITAL WORK
            </span>

            <h1>
              SELECTED
              <br />
              WORK.
            </h1>

          </motion.div>


          <div className="projects-hero-bottom">

            <p>
              UMA SELEÇÃO DE PROJETOS
              DESENVOLVIDOS ENTRE BACK-END,
              INTERFACES, DADOS E SISTEMAS
              COMPLETOS.
            </p>


            <div className="projects-count">

              <span>
                (
                {String(
                  selectedProjects.length
                ).padStart(2, "0")}
                )
              </span>

              <span>
                SELECTED PROJECTS
              </span>

            </div>

          </div>

        </section>



        {/* =================================
            SELECTED WORK
        ================================= */}

        <section
          className="selected-work"
          ref={sectionRef}
        >

          <header className="selected-header">

            <div className="selected-heading">

              <span>
                01
              </span>

              <h2>
                SELECTED
                <br />
                PROJECTS
              </h2>

            </div>


            <div className="selected-meta">

              <span>
                2025 — 2026
              </span>

              <span>
                HOVER TO EXPLORE
              </span>

            </div>

          </header>



          <div className="selected-list">

            {selectedProjects.map(
              (
                project,
                index
              ) => (

                <motion.a
                  href={project.link}

                  className={
                    `selected-project ${
                      activeProject &&
                      activeProject.id !==
                        project.id
                        ? "project-muted"
                        : ""
                    }`
                  }

                  key={project.id}

                  onMouseEnter={() =>
                    setActiveProject(
                      project
                    )
                  }

                  onMouseLeave={() =>
                    setActiveProject(
                      null
                    )
                  }

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}

                  transition={{
                    duration: 0.55,
                    delay:
                      index * 0.06,
                    ease: [
                      0.76,
                      0,
                      0.24,
                      1,
                    ],
                  }}
                >

                  {/* NUMBER */}

                  <span className="selected-number">
                    {project.number}
                  </span>


                  {/* TITLE */}

                  <div className="selected-project-title">

                    <span>
                      {project.category}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.subtitle}
                    </p>

                  </div>


                  {/* STACK */}

                  <div className="selected-stack">

                    <span>
                      STACK
                    </span>

                    <p>
                      {project.stack}
                    </p>

                  </div>


                  {/* YEAR */}

                  <span className="selected-year">
                    {project.year}
                  </span>


                  {/* ARROW */}

                  <span className="selected-arrow">
                    ↗
                  </span>


                  {/* MOBILE IMAGE */}

                  <div className="selected-mobile-image">

                    <img
                      src={project.image}
                      alt=""
                    />

                  </div>

                </motion.a>

              )
            )}

          </div>



          {/* =================================
              FLOATING PREVIEW
          ================================= */}

          <motion.div
            className="project-preview"

            animate={{
              x:
                mousePosition.x - 210,

              y:
                mousePosition.y - 145,

              opacity:
                activeProject
                  ? 1
                  : 0,

              scale:
                activeProject
                  ? 1
                  : 0.92,

              rotate:
                activeProject
                  ? -1.5
                  : -4,
            }}

            transition={{
              x: {
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 0.4,
              },

              y: {
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 0.4,
              },

              opacity: {
                duration: 0.2,
              },

              scale: {
                duration: 0.3,
              },
            }}
          >

            {activeProject && (

              <>
                <img
                  src={
                    activeProject.image
                  }
                  alt=""
                />

                <div className="project-preview-footer">

                  <span>
                    {
                      activeProject.title
                    }
                  </span>

                  <span>
                    VIEW PROJECT ↗
                  </span>

                </div>
              </>

            )}

          </motion.div>



          <footer className="selected-footer">

            <span>
              ESTER / SOFTWARE DEVELOPER
            </span>

            <span>
              SELECTED WORK — 2026
            </span>

          </footer>

        </section>



        {/* =================================
            PROJECT ARCHIVE
        ================================= */}

        <section className="project-archive">

          <header className="project-archive-header">

            <div>

              <span className="project-archive-index">
                02
              </span>

              <div>

                <span className="project-archive-label">
                  OTHER WORK
                </span>

                <h2>
                  PROJECT
                  <br />
                  ARCHIVE.
                </h2>

              </div>

            </div>


            <div className="project-archive-meta">

              <span>
                {
                  String(
                    archiveProjects.length
                  ).padStart(
                    2,
                    "0"
                  )
                } RECORDS
              </span>

              <span>
                DEVELOPMENT ARCHIVE
              </span>

            </div>

          </header>



          <div className="project-archive-list">

            {archiveProjects.map(
              (
                project,
                index
              ) => (

                <motion.a
                  href={project.link}

                  className="project-archive-row"

                  key={project.title}

                  initial={{
                    opacity: 0,
                    y: 15,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}

                  transition={{
                    duration: 0.4,
                    delay:
                      index * 0.04,
                  }}
                >

                  <span className="archive-project-number">
                    {project.number}
                  </span>


                  <h3>
                    {project.title}
                  </h3>


                  <span className="archive-project-category">
                    {project.category}
                  </span>


                  <span className="archive-project-year">
                    {project.year}
                  </span>


                  <span className="archive-project-arrow">
                    ↗
                  </span>

                </motion.a>

              )
            )}

          </div>



          <footer className="project-page-footer">

            <span>
              ESTER / SOFTWARE DEVELOPER
            </span>

            <span>
              ARACAJU — BRASIL
            </span>

            <span>
              PORTFOLIO © 2026
            </span>

          </footer>

        </section>

      </main>

    </PageTransition>

  );
}