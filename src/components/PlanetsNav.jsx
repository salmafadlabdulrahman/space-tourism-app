import { NavLink } from "react-router-dom";
import { getPlanetsData } from "../../firebase";

//const planets = await getPlanetsData();
/*let planets;
getPlanetsData().then((result) => {
  planets = result
}).catch((error) => {
  alert(error.message)
})*/

async function PlanetsNav() {
  const planets = await getPlanetsData();
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
