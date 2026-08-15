import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import PageTransition from "../components/PageTransition/PageTransition";
import Header from "../components/Header/Header";
import SEO from "../components/SEO/SEO";

import "./Contato.css";

type FormData = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

type SubmitStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export default function Contato() {
  const [started, setStarted] =
    useState(false);

  const [step, setStep] =
    useState(1);

  const [
    submitStatus,
    setSubmitStatus,
  ] =
    useState<SubmitStatus>("idle");

  const [
    errorMessage,
    setErrorMessage,
  ] =
    useState("");

  const [
    formData,
    setFormData,
  ] =
    useState<FormData>({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });


  /* ========================================
     UPDATE
  ======================================== */

  function updateField(
    field: keyof FormData,
    value: string
  ) {
    setFormData(
      (previous) => ({
        ...previous,
        [field]: value,
      })
    );

    if (
      submitStatus === "error"
    ) {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  }


  /* ========================================
     VALIDATION
  ======================================== */

  function isValidEmail(
    email: string
  ) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );
  }


  function validateCurrentStep() {
    if (step === 1) {
      return (
        formData.nome.trim().length >=
        2
      );
    }

    if (step === 2) {
      return isValidEmail(
        formData.email.trim()
      );
    }

    if (step === 3) {
      return (
        formData.assunto.trim() !==
        ""
      );
    }

    if (step === 4) {
      return (
        formData.mensagem.trim()
          .length >= 10
      );
    }

    return true;
  }


  /* ========================================
     NAVIGATION
  ======================================== */

  function nextStep() {
    if (
      !validateCurrentStep()
    ) {
      setSubmitStatus("error");

      if (step === 1) {
        setErrorMessage(
          "DIGITE SEU NOME PARA CONTINUAR."
        );
      }

      if (step === 2) {
        setErrorMessage(
          "DIGITE UM EMAIL VÁLIDO."
        );
      }

      if (step === 3) {
        setErrorMessage(
          "SELECIONE O MOTIVO DO CONTATO."
        );
      }

      return;
    }

    setSubmitStatus("idle");
    setErrorMessage("");

    if (step < 4) {
      setStep(
        (previous) =>
          previous + 1
      );
    }
  }


  function previousStep() {
    setSubmitStatus("idle");
    setErrorMessage("");

    if (step > 1) {
      setStep(
        (previous) =>
          previous - 1
      );
    }
  }


  /* ========================================
     SUBMIT
  ======================================== */

  async function handleSubmit() {
    if (
      !validateCurrentStep()
    ) {
      setSubmitStatus("error");

      setErrorMessage(
        "ESCREVA UMA MENSAGEM COM PELO MENOS 10 CARACTERES."
      );

      return;
    }

    const accessKey =
      import.meta.env
        .VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error(
        "VITE_WEB3FORMS_ACCESS_KEY não foi configurada."
      );

      setSubmitStatus("error");

      setErrorMessage(
        "O FORMULÁRIO AINDA NÃO ESTÁ CONFIGURADO."
      );

      return;
    }

    try {
      setSubmitStatus(
        "loading"
      );

      setErrorMessage("");

      const response =
        await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Accept:
                "application/json",
            },

            body: JSON.stringify({
              access_key: accessKey,

              subject:
                `BY ESTER — ${formData.assunto} / ${formData.nome}`,

              from_name:
                "BY ESTER — PORTFOLIO",

              name:
                formData.nome,

              email:
                formData.email,

              "Motivo do contato":
                formData.assunto,

              "Mensagem":
                formData.mensagem,

              "Origem":
                "www.byester.com.br",

              "Portfólio":
                "BY ESTER — SOFTWARE DEVELOPER",
            }),
          }
        );

      const result =
        await response.json();

      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "Erro ao enviar formulário."
        );
      }

      setSubmitStatus(
        "success"
      );

      setFormData({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      });

    } catch (error) {
      console.error(
        error
      );

      setSubmitStatus(
        "error"
      );

      setErrorMessage(
        "NÃO FOI POSSÍVEL ENVIAR. TENTE NOVAMENTE."
      );
    }
  }


  /* ========================================
     RESET
  ======================================== */

  function restartForm() {
    setStarted(false);

    setStep(1);

    setSubmitStatus(
      "idle"
    );

    setErrorMessage("");

    setFormData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });
  }


  return (
    <PageTransition title="CONTATO">

      <SEO
        title="Contato — Ester da Costa Batista"
        description="Entre em contato para oportunidades profissionais, projetos e desenvolvimento de software."
      />

      <main className="contact-page">
        <Header />


        <AnimatePresence
          mode="wait"
        >

          {/* =================================
              INTRO
          ================================= */}

          {!started ? (
            <motion.section
              key="contact-intro"
              className="contact-intro"

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
                y: -30,
              }}

              transition={{
                duration: 0.6,
              }}
            >

              <div className="contact-number">
                05
              </div>


              <div className="contact-heading">
                <span className="contact-eyebrow">
                  CONTATO / 2026
                </span>

                <h1>
                  VAMOS
                  <br />
                  CONVERSAR?
                </h1>
              </div>


              <div className="contact-description">
                <p>
                  TEM UM PROJETO, UMA OPORTUNIDADE
                  <br />
                  OU SÓ QUER TROCAR UMA IDEIA?
                </p>

                <button
                  className="start-contact"
                  type="button"

                  onClick={() =>
                    setStarted(
                      true
                    )
                  }
                >
                  INICIAR CONVERSA

                  <span>
                    ↗
                  </span>
                </button>
              </div>


              <div className="contact-direct">
                <span>
                  PREFERE FALAR DIRETAMENTE?
                </span>

                <div>
                  <a
                    href="mailto:ester.retse30@gmail.com"
                  >
                    EMAIL ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ester-da-costa-batista-929500295/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LINKEDIN ↗
                  </a>

                  <a
                    href="https://github.com/Rester-fullstack"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GITHUB ↗
                  </a>
                </div>
              </div>

            </motion.section>
          ) : (

            /* =================================
               SUCCESS
            ================================= */

            submitStatus ===
            "success" ? (

              <motion.section
                key="contact-success"
                className="contact-success"

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                }}

                transition={{
                  duration:
                    0.6,

                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                }}
              >

                <span className="success-label">
                  MESSAGE / SENT
                </span>


                <h2>
                  MENSAGEM
                  <br />
                  ENVIADA.
                </h2>


                <p>
                  OBRIGADA PELO CONTATO.
                  <br />
                  RESPONDEREI ASSIM QUE POSSÍVEL.
                </p>


                <button
                  type="button"
                  className="success-back"

                  onClick={
                    restartForm
                  }
                >
                  VOLTAR AO CONTATO

                  <span>
                    ↗
                  </span>
                </button>

              </motion.section>

            ) : (

              /* =================================
                 FORM
              ================================= */

              <motion.section
                key="contact-form"
                className="contact-form"

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -30,
                }}

                transition={{
                  duration:
                    0.55,
                }}
              >

                {/* PROGRESS */}

                <div className="form-progress">
                  <span>
                    0{step} / 04
                  </span>

                  <div className="progress-track">
                    <motion.div
                      className="progress-value"

                      animate={{
                        width:
                          `${step * 25}%`,
                      }}

                      transition={{
                        duration:
                          0.5,

                        ease: [
                          0.76,
                          0,
                          0.24,
                          1,
                        ],
                      }}
                    />
                  </div>
                </div>


                {/* STEPS */}

                <AnimatePresence
                  mode="wait"
                >
                  <motion.div
                    key={step}
                    className="form-step"

                    initial={{
                      opacity: 0,
                      x: 40,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    exit={{
                      opacity: 0,
                      x: -40,
                    }}

                    transition={{
                      duration:
                        0.45,

                      ease: [
                        0.76,
                        0,
                        0.24,
                        1,
                      ],
                    }}
                  >

                    {/* STEP 01 */}

                    {step === 1 && (
                      <>
                        <span className="step-label">
                          PRIMEIRO, SEU NOME
                        </span>

                        <h2>
                          COMO POSSO
                          <br />
                          TE CHAMAR?
                        </h2>

                        <input
                          autoFocus
                          type="text"
                          placeholder="SEU NOME"

                          value={
                            formData.nome
                          }

                          onChange={(
                            event
                          ) =>
                            updateField(
                              "nome",
                              event
                                .target
                                .value
                            )
                          }

                          onKeyDown={(
                            event
                          ) => {
                            if (
                              event.key ===
                              "Enter"
                            ) {
                              nextStep();
                            }
                          }}
                        />
                      </>
                    )}


                    {/* STEP 02 */}

                    {step === 2 && (
                      <>
                        <span className="step-label">
                          AGORA, SEU CONTATO
                        </span>

                        <h2>
                          QUAL É O SEU
                          <br />
                          EMAIL?
                        </h2>

                        <input
                          autoFocus
                          type="email"
                          placeholder="EMAIL"

                          value={
                            formData.email
                          }

                          onChange={(
                            event
                          ) =>
                            updateField(
                              "email",
                              event
                                .target
                                .value
                            )
                          }

                          onKeyDown={(
                            event
                          ) => {
                            if (
                              event.key ===
                              "Enter"
                            ) {
                              nextStep();
                            }
                          }}
                        />
                      </>
                    )}


                    {/* STEP 03 */}

                    {step === 3 && (
                      <>
                        <span className="step-label">
                          MOTIVO DO CONTATO
                        </span>

                        <h2>
                          SOBRE O QUE
                          <br />
                          QUER CONVERSAR?
                        </h2>

                        <div className="subject-options">
                          {[
                            "OPORTUNIDADE",
                            "PROJETO",
                            "FREELANCE",
                            "OUTRO",
                          ].map(
                            (
                              option
                            ) => (
                              <button
                                key={
                                  option
                                }

                                type="button"

                                className={
                                  formData.assunto ===
                                  option
                                    ? "subject-option active"
                                    : "subject-option"
                                }

                                onClick={() =>
                                  updateField(
                                    "assunto",
                                    option
                                  )
                                }
                              >
                                {
                                  option
                                }

                                <span>
                                  ↗
                                </span>
                              </button>
                            )
                          )}
                        </div>
                      </>
                    )}


                    {/* STEP 04 */}

                    {step === 4 && (
                      <>
                        <span className="step-label">
                          ÚLTIMA ETAPA
                        </span>

                        <h2>
                          ME CONTE
                          <br />
                          UM POUCO.
                        </h2>

                        <textarea
                          autoFocus

                          placeholder="SUA MENSAGEM"

                          value={
                            formData.mensagem
                          }

                          onChange={(
                            event
                          ) =>
                            updateField(
                              "mensagem",
                              event
                                .target
                                .value
                            )
                          }
                        />
                      </>
                    )}


                    {/* ERROR */}

                    <AnimatePresence>
                      {submitStatus ===
                        "error" &&
                        errorMessage && (
                          <motion.p
                            className="form-error"

                            initial={{
                              opacity:
                                0,

                              y:
                                8,
                            }}

                            animate={{
                              opacity:
                                1,

                              y:
                                0,
                            }}

                            exit={{
                              opacity:
                                0,
                            }}
                          >
                            {
                              errorMessage
                            }
                          </motion.p>
                        )}
                    </AnimatePresence>

                  </motion.div>
                </AnimatePresence>


                {/* NAVIGATION */}

                <div className="form-navigation">
                  <button
                    className="form-back"
                    type="button"

                    disabled={
                      submitStatus ===
                      "loading"
                    }

                    onClick={
                      step === 1
                        ? () =>
                            setStarted(
                              false
                            )
                        : previousStep
                    }
                  >
                    ← VOLTAR
                  </button>


                  {step < 4 ? (
                    <button
                      className="form-next"
                      type="button"

                      onClick={
                        nextStep
                      }
                    >
                      CONTINUAR

                      <span>
                        →
                      </span>
                    </button>
                  ) : (
                    <button
                      className="form-next"
                      type="button"

                      disabled={
                        submitStatus ===
                        "loading"
                      }

                      onClick={
                        handleSubmit
                      }
                    >
                      {submitStatus ===
                      "loading"
                        ? "ENVIANDO..."
                        : "ENVIAR"}

                      <span>
                        {submitStatus ===
                        "loading"
                          ? "···"
                          : "↗"}
                      </span>
                    </button>
                  )}
                </div>

              </motion.section>

            )
          )}

        </AnimatePresence>

      </main>
    </PageTransition>
  );
}