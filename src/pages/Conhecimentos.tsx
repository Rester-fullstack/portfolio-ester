import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Header from "../components/Header/Header";
import PageTransition from "../components/PageTransition/PageTransition";
import SEO from "../components/SEO/SEO";
import "./Conhecimentos.css";


/* ========================================
   TYPES
======================================== */

type ArchiveId =
  | "backend"
  | "frontend"
  | "database"
  | "tools";

interface Archive {
  id: ArchiveId;
  number: string;
  title: string;
  description: string;
  items: string[];
}


/* ========================================
   TECHNICAL ARCHIVE
======================================== */

const archives: Archive[] = [
  {
    id: "backend",
    number: "01",
    title: "BACK-END",
    description: "SERVER / API / APPLICATION",
    items: [
      "C#",
      ".NET",
      "ASP.NET CORE",
      "ENTITY FRAMEWORK",
      "REST API",
      "JWT",
    ],
  },

  {
    id: "frontend",
    number: "02",
    title: "FRONT-END",
    description: "INTERFACE / WEB / EXPERIENCE",
    items: [
      "REACT",
      "TYPESCRIPT",
      "JAVASCRIPT",
      "HTML",
      "CSS",
      "TAILWIND",
      "BOOTSTRAP",
    ],
  },

  {
    id: "database",
    number: "03",
    title: "DATABASE",
    description: "DATA / STORAGE / STRUCTURE",
    items: [
      "SQL SERVER",
      "MYSQL",
      "POSTGRESQL",
      "FIREBASE",
    ],
  },

  {
    id: "tools",
    number: "04",
    title: "TOOLS",
    description: "WORKFLOW / DEVELOPMENT",
    items: [
      "GIT",
      "GITHUB",
      "VISUAL STUDIO",
      "VS CODE",
      "SWAGGER",
      "FIGMA",
    ],
  },
];


/* ========================================
   FORMAÇÃO
======================================== */

const education = [
  {
    id: "EDU-01",
    title:
      "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    institution: "SENAI",
    year: "2025",
    type: "FORMAÇÃO TÉCNICA",
    credentialUrl:
    "",
  },
];


/* ========================================
   CERTIFICAÇÕES
======================================== */

const certifications = [
  {
    id: "CERT-01",

    title:
      "C# COMPLETO — PROGRAMAÇÃO ORIENTADA A OBJETOS + PROJETOS",

    institution: "UDEMY",

    year: "2025",

    category: "BACK-END",

    status: "CONCLUÍDO",

    credentialUrl:
    "https://www.udemy.com/certificate/UC-9e97e753-f57f-42ab-9b64-199a6fb59461/",
  },

  {
    id: "CERT-02",

    title:
      "SQL PARA ANÁLISE DE DADOS",

    institution: "UDEMY",

    year: "2025",

    category: "DATABASE",

    status: "CONCLUÍDO",

    credentialUrl:  "https://www.udemy.com/certificate/UC-89f21a8d-4982-4e83-88dc-5cb55fd1f773/",
  },

  {
    id: "CERT-03",

    title:
      "REACT DO ZERO À MAESTRIA",

    institution: "UDEMY",

    year: "2026",

    category: "FRONT-END",

    status: "CONCLUÍDO",

   credentialUrl:
   "https://www.udemy.com/certificate/UC-06cfacbf-33eb-420c-a82b-7296a3958525/",
  },

  {
    id: "CERT-04",

    title:
      "WINDOWS SERVER 2025",

    institution:
      "CURSO PROFISSIONAL",

    year: "2025",

    category:
      "INFRASTRUCTURE",

    status: "CONCLUÍDO",

    credentialUrl:
   "https://www.udemy.com/certificate/UC-257f6f83-cfd0-453b-b10a-e6667069c75e/",
  },

  {
    id: "CERT-05",

    title:
      "ISO 27001 & ISO 27002",

    institution:
      "CURSO PROFISSIONAL",

    year: "2026",

    category:
      "SECURITY",

    status: "CONCLUÍDO",

    credentialUrl:
    "https://www.udemy.com/certificate/UC-8afa7765-ba66-4fe2-b634-c8e1a2e8b3a8/",
  },
];

type Certification =
  (typeof certifications)[number];


/* ========================================
   COMPONENT
======================================== */

export default function Conhecimentos() {
  const [
    activeArchive,
    setActiveArchive,
  ] = useState<ArchiveId | null>(
    "backend"
  );

  const [
    showAllCertificates,
    setShowAllCertificates,
  ] = useState(false);

  const [
    selectedCertificate,
    setSelectedCertificate,
  ] =
    useState<Certification | null>(
      null
    );


  /* ========================================
     ARCHIVE
  ======================================== */

  function toggleArchive(
    id: ArchiveId
  ) {
    setActiveArchive(
      (current) =>
        current === id
          ? null
          : id
    );
  }


  /* ========================================
     MODAL
     ESC + BLOQUEAR SCROLL
  ======================================== */

  useEffect(() => {
    if (!selectedCertificate) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedCertificate]);


  return (
    <PageTransition title="CONHECIMENTOS">

      <SEO
        title="Conhecimentos — Ester da Costa Batista"
        description="Tecnologias, ferramentas, cursos e certificações em desenvolvimento de software."
      />

      <main className="knowledge-page">
        <Header />


        {/* =================================
            HERO
        ================================= */}

        <section className="knowledge-hero">
          <div className="knowledge-hero-top">
            <span>
              04 / CONHECIMENTOS
            </span>

            <span>
              KNOWLEDGE ARCHIVE
              <br />
              BY ESTER — 2026
            </span>
          </div>


          <motion.div
            className="knowledge-title"
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
            <span className="knowledge-label">
              STACK / DEVELOPMENT
            </span>

            <h1>
              CONHECI
              <br />
              MENTOS.
            </h1>
          </motion.div>


          <div className="knowledge-hero-bottom">
            <p>
              TECNOLOGIAS E FERRAMENTAS QUE
              FAZEM PARTE DO MEU PROCESSO DE
              DESENVOLVIMENTO.
            </p>

            <span className="explore">
              EXPLORE ↓
            </span>
          </div>
        </section>


        {/* =================================
            TECHNICAL ARCHIVE
        ================================= */}

        <section className="archive-section">
          <header className="archive-header">
            <div>
              <span className="archive-index">
                01
              </span>

              <h2>
                TECHNICAL
                <br />
                ARCHIVE
              </h2>
            </div>


            <div className="archive-meta">
              <span>
                04 CATEGORIES
              </span>

              <span>
                SELECT TO EXPLORE
              </span>
            </div>
          </header>


          <div className="archive-stack">
            {archives.map(
              (
                archive,
                index
              ) => {
                const isActive =
                  activeArchive ===
                  archive.id;

                return (
                  <motion.article
                    className={`archive-card archive-${archive.id} ${
                      isActive
                        ? "active"
                        : ""
                    }`}
                    key={
                      archive.id
                    }
                    initial={{
                      opacity: 0,
                      y: 45,
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
                      duration: 0.55,

                      delay:
                        index *
                        0.08,

                      ease: [
                        0.76,
                        0,
                        0.24,
                        1,
                      ],
                    }}
                  >
                    <button
                      className="archive-trigger"
                      type="button"
                      onClick={() =>
                        toggleArchive(
                          archive.id
                        )
                      }
                      aria-expanded={
                        isActive
                      }
                    >
                      <div className="archive-card-heading">
                        <span className="archive-card-number">
                          {
                            archive.number
                          }
                        </span>

                        <h3>
                          {
                            archive.title
                          }
                        </h3>
                      </div>


                      <div className="archive-card-info">
                        <span>
                          {
                            archive.description
                          }
                        </span>

                        <span className="archive-symbol">
                          {
                            isActive
                              ? "−"
                              : "+"
                          }
                        </span>
                      </div>
                    </button>


                    <AnimatePresence
                      initial={false}
                    >
                      {isActive && (
                        <motion.div
                          className="archive-content"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height:
                              "auto",

                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration:
                                0.5,

                              ease: [
                                0.76,
                                0,
                                0.24,
                                1,
                              ],
                            },

                            opacity: {
                              duration:
                                0.3,

                              delay:
                                0.08,
                            },
                          }}
                        >
                          <div className="archive-content-inner">
                            <div className="archive-content-meta">
                              <span>
                                ENTRIES
                              </span>

                              <span>
                                {String(
                                  archive
                                    .items
                                    .length
                                ).padStart(
                                  2,
                                  "0"
                                )}
                              </span>
                            </div>


                            <div className="archive-items">
                              {archive.items.map(
                                (
                                  item,
                                  itemIndex
                                ) => (
                                  <motion.div
                                    className="archive-item"
                                    key={
                                      item
                                    }
                                    initial={{
                                      opacity:
                                        0,

                                      x:
                                        -15,
                                    }}
                                    animate={{
                                      opacity:
                                        1,

                                      x:
                                        0,
                                    }}
                                    transition={{
                                      delay:
                                        itemIndex *
                                        0.04,
                                    }}
                                  >
                                    <span className="item-index">
                                      {String(
                                        itemIndex +
                                          1
                                      ).padStart(
                                        2,
                                        "0"
                                      )}
                                    </span>


                                    <span className="item-name">
                                      {
                                        item
                                      }
                                    </span>


                                    <span className="item-line" />


                                    <span className="item-code">
                                      {
                                        archive.number
                                      }.

                                      {String(
                                        itemIndex +
                                          1
                                      ).padStart(
                                        2,
                                        "0"
                                      )}
                                    </span>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              }
            )}
          </div>


          <footer className="archive-footer">
            <span>
              ESTER / SOFTWARE DEVELOPER
            </span>

            <span>
              TECHNICAL ARCHIVE — 2026
            </span>
          </footer>
        </section>


        {/* =================================
            EDUCATION ARCHIVE
        ================================= */}

        <section className="education-section">
          <div className="education-header">
            <div className="education-heading">
              <span className="education-index">
                02
              </span>

              <div>
                <span className="education-label">
                  EDUCATION ARCHIVE
                </span>

                <h2>
                  FORMAÇÃO &
                  <br />
                  CERTIFICAÇÕES.
                </h2>
              </div>
            </div>


            <div className="education-meta">
              <span>
                ACADEMIC RECORDS
              </span>

              <span>
                CONTINUOUS LEARNING
              </span>
            </div>
          </div>


          {/* =================================
              FORMAÇÃO
          ================================= */}

          <div className="education-group">
            <div className="education-group-header">
              <span>
                FORMAÇÃO
              </span>

              <span>
                {String(
                  education.length
                ).padStart(
                  2,
                  "0"
                )}{" "}
                RECORDS
              </span>
            </div>


            <div className="education-list">
              {education.map((item, index) => (
                <div
                  className="education-record education-record-main"
                  key={item.id}
                >
                  <span className="education-record-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="education-record-title">
                    <span>
                      {item.type}
                    </span>

                    <h3>
                      {item.title}
                    </h3>
                  </div>

                  <div className="education-record-info">
                    <span>
                      {item.institution}
                    </span>

                    <span>
                      {item.year}
                    </span>
                  </div>

                  {item.credentialUrl && (
                    <a
                      className="education-record-arrow"
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver credencial de ${item.title}`}
                    >
                      ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* =================================
              CERTIFICAÇÕES
          ================================= */}

          <div className="education-group certifications-group">
            <div className="education-group-header">
              <span>
                CERTIFICAÇÕES
              </span>

              <span>
                {String(
                  certifications.length
                ).padStart(
                  2,
                  "0"
                )}{" "}
                RECORDS
              </span>
            </div>


            <div className="education-list">
              {certifications
                .slice(
                  0,

                  showAllCertificates
                    ? certifications.length
                    : 4
                )
                .map(
                  (
                    item,
                    index
                  ) => (
                    <motion.button
                      type="button"
                      className="education-record certification-record"
                      key={
                        item.id
                      }
                      onClick={() =>
                        setSelectedCertificate(
                          item
                        )
                      }
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration:
                          0.35,
                      }}
                    >
                      <span className="education-record-number">
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>


                      <div className="education-record-title">
                        <span>
                          {
                            item.category
                          }
                        </span>

                        <h3>
                          {
                            item.title
                          }
                        </h3>
                      </div>


                      <div className="education-record-info">
                        <span>
                          {
                            item.institution
                          }
                        </span>

                        <span>
                          {
                            item.year
                          }
                        </span>
                      </div>


                      <span className="education-record-arrow">
                        ↗
                      </span>
                    </motion.button>
                  )
                )}
            </div>


            {/* VER TODOS */}

            {certifications.length >
              4 && (
              <button
                type="button"
                className="education-show-more"
                onClick={() =>
                  setShowAllCertificates(
                    (current) =>
                      !current
                  )
                }
              >
                <span>
                  {showAllCertificates
                    ? "MOSTRAR MENOS"
                    : "VER TODOS"}
                </span>

                <span>
                  {showAllCertificates
                    ? "−"
                    : "+"}
                </span>
              </button>
            )}
          </div>


          {/* FOOTER */}

          <div className="education-footer">
            <span>
              ESTER / SOFTWARE DEVELOPER
            </span>

            <span>
              EDUCATION ARCHIVE — 2026
            </span>
          </div>
        </section>


        {/* =================================
            CERTIFICATE MODAL
        ================================= */}

        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="certificate-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`Certificação ${selectedCertificate.title}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={() =>
                setSelectedCertificate(
                  null
                )
              }
            >
              <motion.div
                className="certificate-modal-panel"
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: 0,
                }}
                exit={{
                  y: "100%",
                }}
                transition={{
                  duration: 0.55,

                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                }}
                onClick={(
                  event
                ) =>
                  event.stopPropagation()
                }
              >

                {/* TOP */}

                <div className="certificate-modal-top">
                  <span>
                    {
                      selectedCertificate.id
                    }
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCertificate(
                        null
                      )
                    }
                    aria-label="Fechar detalhes da certificação"
                  >
                    FECHAR ×
                  </button>
                </div>


                {/* TITLE */}

                <div className="certificate-modal-title">
                  <span>
                    {
                      selectedCertificate.category
                    }
                  </span>

                  <h2>
                    {
                      selectedCertificate.title
                    }
                  </h2>
                </div>


                {/* DETAILS */}

                <div className="certificate-modal-details">
                  <div>
                    <span>
                      INSTITUIÇÃO
                    </span>

                    <strong>
                      {
                        selectedCertificate.institution
                      }
                    </strong>
                  </div>


                  <div>
                    <span>
                      CONCLUSÃO
                    </span>

                    <strong>
                      {
                        selectedCertificate.year
                      }
                    </strong>
                  </div>


                  <div>
                    <span>
                      CATEGORIA
                    </span>

                    <strong>
                      {
                        selectedCertificate.category
                      }
                    </strong>
                  </div>


                  <div>
                    <span>
                      STATUS
                    </span>

                    <strong>
                      {
                        selectedCertificate.status
                      }
                    </strong>
                  </div>
                </div>


                {/* BOTTOM */}

                <div className="certificate-modal-bottom">
                  <span>
                    EDUCATION ARCHIVE /{" "}
                    {
                      selectedCertificate.id
                    }
                  </span>


                  {selectedCertificate.credentialUrl && (
                    <a
                      href={
                        selectedCertificate.credentialUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      VER CREDENCIAL OFICIAL ↗
                    </a>
                  )}
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </PageTransition>
  );
}