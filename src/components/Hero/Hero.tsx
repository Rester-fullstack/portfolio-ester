import { motion } from "framer-motion";
import heroImage from "../../assets/hero-water.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div
          className="hero-title-wrapper"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <p className="hero-kicker">
            SOFTWARE DEVELOPMENT
          </p>

          <h1 className="hero-title">
            SOFTWARE
            <br />
            DEVELOPER.
          </h1>
        </motion.div>

        <motion.div
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
        >
          <span className="hero-index">(01)</span>

          <p>
            Desenvolvo aplicações web,
            <br />
            APIs e sistemas completos
            <br />
            com foco em funcionalidade,
            <br />
            organização e experiência.
          </p>

          <span className="hero-stack">
            C# / .NET / REACT / SQL SERVER
          </span>
        </motion.div>

        <div className="hero-footer">
          <a href="#projetos" className="hero-project-link">
            VER PROJETOS
            <span>↗</span>
          </a>

          <span className="hero-location">
            ARACAJU — BRASIL
          </span>
        </div>
      </div>
    </section>
  );
}