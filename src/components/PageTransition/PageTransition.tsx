import { motion } from "framer-motion";
import "./PageTransition.css";

type PageTransitionProps = {
  title: string;
  children: React.ReactNode;
};

export default function PageTransition({
  title,
  children,
}: PageTransitionProps) {
  return (
    <div className="page">
      {children}

      {/* camada secundária */}
      <motion.div
        className="transition-layer transition-layer-back"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{
          y: {
            duration: 1.35,
            delay: 1.0,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      />

      {/* camada principal */}
      <motion.div
        className="transition-layer transition-layer-main"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{
          duration: 1.35,
          delay: 1.0,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.div
          className="transition-content"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [35, 0, 0, -25],
          }}
          transition={{
            duration: 1.6,
            times: [0, 0.2, 0.72, 1],
            ease: "easeInOut",
          }}
        >
          <span className="transition-small">
            NEXT PAGE
          </span>

          <h2
            className={`transition-title ${
              title.length > 10
                ? "transition-title-long"
                : ""
            }`}
          >
            {title}
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
}