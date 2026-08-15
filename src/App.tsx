import { AnimatePresence } from "framer-motion";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import NotFound from "./pages/NotFound";

import Index from "./pages/Index";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import Conhecimentos from "./pages/Conhecimentos";
import Sobre from "./pages/Sobre";


export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <Routes
        location={location}
        key={location.pathname}
      >

        <Route
          path="*"
          element={<NotFound />}
        />

        <Route
          path="/"
          element={<Index />}
        />

        <Route
          path="/sobre"
          element={<Sobre />}
        />

        <Route
          path="/projetos"
          element={<Projetos />}
        />

        <Route
          path="/conhecimentos"
          element={<Conhecimentos />}
        />

        <Route
          path="/contato"
          element={<Contato />}
        />

      </Routes>
    </AnimatePresence>
  );
}