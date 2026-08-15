import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/Header/Header";
import PageTransition from "../components/PageTransition/PageTransition";

import "./NotFound.css";

export default function NotFound() {
  return (
    <PageTransition title="404">
      <main className="not-found-page">
        <Header />

        <section className="not-found-layout">
          <div className="not-found-topline">
            <span>ERROR / ARCHIVE SYSTEM</span>
            <span>BYESTER — 2026</span>
          </div>

          <motion.div
            className="not-found-hero"
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <span className="not-found-kicker">
              FILE NOT FOUND
            </span>

            <h1>
              4<span>0</span>4
            </h1>
          </motion.div>

          <motion.div
            className="not-found-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.55,
            }}
          >
            <p>
              ESTE ARQUIVO NÃO EXISTE,
              <br />
              FOI MOVIDO OU NUNCA ESTEVE
              <br />
              NESTE CAMINHO.
            </p>
          </motion.div>

          <motion.div
            className="not-found-record"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div>
              <span>ID</span>
              <strong>404-EST</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>PAGE</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>MISSING</strong>
            </div>

            <div>
              <span>PATH</span>
              <strong>UNKNOWN</strong>
            </div>

            <div>
              <span>OWNER</span>
              <strong>ESTER</strong>
            </div>
          </motion.div>

          <motion.div
            className="not-found-action"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.95,
            }}
          >
            <Link to="/">
              VOLTAR AO INDEX
              <span>↗</span>
            </Link>
          </motion.div>

          <div className="not-found-footer">
            <span>ESTER / SOFTWARE DEVELOPER</span>
            <span>BYESTER.COM.BR</span>
            <span>SYSTEM ERROR — 404</span>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}