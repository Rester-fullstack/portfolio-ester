import { motion } from "framer-motion";

import Header from "../components/Header/Header";
import PageTransition from "../components/PageTransition/PageTransition";

import aboutImage from "../assets/about-image.jpeg";

import SEO from "../components/SEO/SEO";

import "./Sobre.css";

export default function Sobre() {
  return (
    <PageTransition title="SOBRE">
      
        <SEO
          title="Sobre — Ester da Costa Batista"
          description="Conheça minha trajetória, formação e conhecimentos em desenvolvimento de software."
        />

      <main className="about-page">
        <Header />

        <section className="about-wrapper">

          {/* =================================
              FOLHA 01
          ================================= */}

          <motion.section
            className="about-sheet about-sheet-intro"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.76, 0, 0.24, 1],
            }}
          >

            <div className="about-sheet-top">
              <span>
                02 / SOBRE
              </span>

              <span>
                PERSONAL ARCHIVE — 2026
              </span>
            </div>


            <div className="about-intro-title">
              <span className="about-small-label">
                I'M
              </span>

              <h1>
                ESTER
              </h1>

              <p>
                SOFTWARE
                <br />
                DEVELOPER
              </p>
            </div>


            <div className="about-intro-grid">

              {/* PROFILE */}

              <div className="about-mini-block">
                <span className="about-mini-number">
                  01
                </span>

                <span className="about-mini-title">
                  PROFILE
                </span>

                <p>
                  SOFTWARE DEVELOPER
                  <br />
                  BACK-END / FULL STACK
                  <br />
                  ARACAJU — BRASIL
                </p>
              </div>


              {/* STACK */}

              <div className="about-mini-block">
                <span className="about-mini-number">
                  02
                </span>

                <span className="about-mini-title">
                  CORE STACK
                </span>

                <p>
                  C# / .NET
                  <br />
                  REACT / TYPESCRIPT
                  <br />
                  SQL SERVER
                </p>
              </div>


              {/* INTERESTS */}

              <div className="about-mini-block">
                <span className="about-mini-number">
                  03
                </span>

                <span className="about-mini-title">
                  INTERESTS
                </span>

                <p>
                  WEB APPLICATIONS
                  <br />
                  APIs / DATA
                  <br />
                  DIGITAL INTERFACES
                </p>
              </div>


              {/* LINKS */}

              <div className="about-mini-links">
                <a href="#about-me">
                  ABOUT ME ↘
                </a>

                <a href="/contato">
                  CONTACT ↗
                </a>
              </div>

            </div>


            <div className="about-sheet-bottom">
              <span>
                ESTER / SOFTWARE DEVELOPER
              </span>

              <span>
                BYESTER.COM.BR
              </span>
            </div>

          </motion.section>



          {/* =================================
              FOLHA 02
          ================================= */}

          <motion.section
            className="about-sheet about-sheet-detail"
            id="about-me"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            }}
          >

            <div className="about-detail-header">
              <div>
                <span>
                  01
                </span>

                <h2>
                  ABOUT ME
                </h2>
              </div>

              <span>
                PROFILE / 2026
              </span>
            </div>


            <div className="about-detail-intro">

              <p>
                SOU DESENVOLVEDORA DE SOFTWARE COM FOCO
                EM APLICAÇÕES WEB, APIS E SISTEMAS
                ORGANIZADOS, FUNCIONAIS E BEM ESTRUTURADOS.
              </p>

              <p>
                GOSTO DE TRANSFORMAR IDEIAS EM PRODUTOS
                DIGITAIS, UNINDO LÓGICA, DESENVOLVIMENTO
                E UMA BOA EXPERIÊNCIA VISUAL.
              </p>

            </div>



            <div className="about-detail-grid">

              {/* IMAGE */}

              <div className="about-image">
                <img
                  src={aboutImage}
                  alt="Imagem de apresentação"
                />

                <div className="about-image-caption">
                  <span>
                    ESTER
                  </span>

                  <span>
                    ARACAJU — BR
                  </span>
                </div>
              </div>


              {/* RIGHT INFO */}

              <div className="about-information">

                <div className="about-info-heading">
                  <span>
                    02
                  </span>

                  <h3>
                    EDUCATION
                  </h3>
                </div>


                <div className="about-info-record">
                  <span>
                    2025
                  </span>

                  <div>
                    <strong>
                      ANÁLISE E DESENVOLVIMENTO
                      DE SISTEMAS
                    </strong>

                    <p>
                      SENAI
                    </p>
                  </div>
                </div>


                <div className="about-info-heading about-focus-title">
                  <span>
                    03
                  </span>

                  <h3>
                    FOCUS
                  </h3>
                </div>


                <div className="about-focus-grid">

                  <span>
                    BACK-END
                  </span>

                  <span>
                    FULL STACK
                  </span>

                  <span>
                    APIs
                  </span>

                  <span>
                    DATABASE
                  </span>

                  <span>
                    DATA
                  </span>

                  <span>
                    UI DEVELOPMENT
                  </span>

                </div>

              </div>

            </div>


            <div className="about-detail-footer">

              <span>
                PERSONAL ARCHIVE / 02
              </span>

              <a href="/contato">
                LET'S WORK TOGETHER ↗
              </a>

            </div>

          </motion.section>

        </section>

      </main>
    </PageTransition>
  );
}