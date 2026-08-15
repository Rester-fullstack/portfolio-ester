import { useState } from "react";

import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import PageTransition from "../components/PageTransition/PageTransition";

import heroImage from "../assets/hero-water.jpg";

import SEO from "../components/SEO/SEO";

import "./Index.css";

export default function Index() {
  
  const [showIntro, setShowIntro] = useState(() => {
    return (
      sessionStorage.getItem("byester-intro") !== "done"
    );
  });

  /*
    Executada quando a Intro termina.
  */
  function finishIntro() {
    sessionStorage.setItem(
      "byester-intro",
      "done"
    );

    setShowIntro(false);
  }

  return (
    <PageTransition title="INDEX">
      <>
        {/* =========================
            INTRO
        ========================= */}

        {showIntro && (
          <Intro
            onFinish={finishIntro}
          />
        )}

        {/* =========================
            INDEX
        ========================= */}

        <SEO
          title="Ester da Costa Batista — Software Developer"
          description="Portfólio de Ester da Costa Batista, desenvolvedora de software com projetos em C#, .NET, React e SQL Server."
        />

        <main
          className="index-page"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          {/* overlay da imagem */}

          <div className="index-overlay" />

          {/* header */}

          <Header />

          {/* conteúdo */}

          <section className="index-content">

            {/* título principal */}

            <div className="index-title-area">
              <span className="index-kicker">
                SOFTWARE DEVELOPMENT
              </span>

              <h1>
                SOFTWARE
                <br />
                DEVELOPER.
              </h1>
            </div>

            {/* informações */}

            <div className="index-info">
              <span className="index-number">
                (01)
              </span>

              <p>
                DESENVOLVO APLICAÇÕES WEB,
                <br />
                APIs E SISTEMAS COMPLETOS
                <br />
                COM FOCO EM FUNCIONALIDADE
                <br />
                E ORGANIZAÇÃO.
              </p>

              <span className="index-stack">
                C# / .NET / REACT / SQL SERVER
              </span>
            </div>

            {/* rodapé */}

            <div className="index-bottom">
              <span>
                ESTER DA COSTA BATISTA
              </span>

              <span>
                ARACAJU — BRASIL
              </span>

              <span>
                PORTFOLIO © 2026
              </span>
            </div>

          </section>
        </main>
      </>
    </PageTransition>
  );
}