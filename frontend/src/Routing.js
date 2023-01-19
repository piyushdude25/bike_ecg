import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Superadmin from "./components/admin/superadmin";

const Home = lazy(() => import("./components/home/home"));
const Superadmin = lazy(() => import("./components/admin/superadmin"));

export default function Routing() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/superadmin" element={<Superadmin />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
