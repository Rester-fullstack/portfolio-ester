import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Intro.css";

type IntroProps = {
  onFinish: () => void;
};

export default function Intro({
  onFinish,
}: IntroProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1700;
    const intervalTime = 25;

    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = current + increment;

        if (next >= 100) {
          window.clearInterval(interval);

          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress !== 100) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onFinish();
    }, 900);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [progress, onFinish]);

  return (
    <motion.div
      className="intro"
      initial={{ y: 0 }}
      animate={
        progress === 100
          ? { y: "-100%" }
          : { y: 0 }
      }
      transition={{
        duration: 0.9,
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="intro-top">
        <span>
          ESTER / PORTFOLIO
        </span>

        <span>
          2026
        </span>
      </div>

      <div className="intro-center">
        <motion.span
          className="intro-kicker"
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          SOFTWARE DEVELOPER
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          INITIALIZING
          <br />
          DIGITAL
          <br />
          ARCHIVE.
        </motion.h1>
      </div>

      <div className="intro-bottom">
        <div className="intro-progress">
          <div className="intro-progress-top">
            <span>
              SYSTEM / LOAD
            </span>

            <span>
              {String(
                Math.round(progress)
              ).padStart(3, "0")}
            </span>
          </div>

          <div className="intro-progress-track">
            <motion.div
              className="intro-progress-value"
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.08,
                ease: "linear",
              }}
            />
          </div>
        </div>

        <span className="intro-domain">
          BYESTER.COM.BR
        </span>
      </div>
    </motion.div>
  );
}