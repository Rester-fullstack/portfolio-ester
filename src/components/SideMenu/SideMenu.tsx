import { AnimatePresence, motion } from "framer-motion";
import "./SideMenu.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { number: "01", label: "INDEX", href: "/" },
  { number: "02", label: "SOBRE", href: "/sobre" },
  { number: "03", label: "PROJETOS", href: "/projetos" },
  { number: "04", label: "CONHECIMENTOS", href: "/conhecimentos" },
  { number: "05", label: "CONTATO", href: "/contato" },
];

export default function SideMenu({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="menu-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />

          <motion.aside
            className="side-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="side-menu-top">
              <span className="side-menu-label">
                NAVEGAÇÃO
              </span>

              <button
                className="side-menu-close"
                onClick={onClose}
              >
                CLOSE
                <span>×</span>
              </button>
            </div>

            <nav className="side-menu-nav">
              {links.map((link, index) => (
                <motion.a
                  href={link.href}
                  key={link.label}
                  className="side-menu-link"
                  onClick={onClose}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.06,
                  }}
                >
                  <span className="side-menu-number">
                    {link.number}
                  </span>

                  <span className="side-menu-title">
                    {link.label}
                  </span>

                  <span className="side-menu-arrow">
                    ↗
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="side-menu-footer">
              <div className="side-menu-socials">
                <a href="https://github.com/Rester-fullstack">GITHUB</a>
                <a href="https://www.linkedin.com/in/ester-da-costa-batista-929500295">LINKEDIN</a>
              </div>

              <span>
                ARACAJU — BR
              </span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}