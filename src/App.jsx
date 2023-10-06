import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./App.css";
import NavBarLayout from "./components/NavBarLayout";
import PlanetsNavLayout from "./components/PlanetsNavLayout";
import PlanetInfo from "./pages/PlanetInfo";
import TechInfo from "./pages/TechInfo";
import TechNavLayout from "./components/TechNavLayout";
import CrewNavLayout from "./components/CrewNavLayout";
import CrewMember from "./pages/CrewMember";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<NavBarLayout />}>
            <Route path="/" element={<Home />} />
            <Route element={<PlanetsNavLayout />}>
              <Route path="destination" element={<Destination />} />
              <Route path="destination/:name" element={<PlanetInfo />} />
            </Route>
            <Route element={<CrewNavLayout />}>
              <Route path="crew" element={<Crew />} />
              <Route path="crew/:id" element={<CrewMember />} />
            </Route>

            <Route element={<TechNavLayout />}>
              <Route path="technology" element={<Technology />} />
              <Route path="technology/:id" element={<TechInfo />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
{
  /*<Route path="moon" element={<Moon />}></Route>
            <Route path="mars" element={<Mars />}></Route>
            <Route path="europa" element={<Titan />}></Route>
  <Route path="titan" element={<Europa />}></Route>*/
}
