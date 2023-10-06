import { NavLink } from "react-router-dom";
import { getPlanetsData } from "../../firebase";

const planets = await getPlanetsData();

function PlanetsNav() {
  const result = planets.map((planet) => (
    <li key={planet.name}>
      <NavLink
        key={planet.name}
        to={`/destination/${planet.name}`}
        className="link-text"
      >
        {planet.name}
      </NavLink>
    </li>
  ));
  return <ul>{result}</ul>;
}

export default PlanetsNav;
