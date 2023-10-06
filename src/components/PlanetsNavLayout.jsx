import { Outlet } from "react-router-dom";

function PlanetsNavLayout() {
  return (
    <div>
      <div>
        <h2 className="destination-title">
          <span>01</span> Pick your destination
        </h2>
      </div>

      <Outlet />
    </div>
  );
}

export default PlanetsNavLayout;










/*<div className="content destination-content">
      <div className="destination-details">
        <h2>
          <span>01</span> Pick your destination
        </h2>
      </div>

      <div className="planets-nav">
        <ul>{result}</ul>
      </div>

      <Outlet />
    </div> */

/*const planetResult = filtered.map((planet) => {
    return (
      planet.description
    )
  }); */

{
  /*<div className="destination-description">
        <h1>{filteredPlanet?.name}</h1>
        <p>{filteredPlanet?.description}</p>
      </div>

      
        <div className="numbers">
          <div className="distance">
            <h4>Avg. Distance</h4>
            <h3>{filteredPlanet?.distance}</h3>
          </div>
          <div className="time">
            <h4>Est. Travel Time</h4>
            <h3>{filteredPlanet?.travelTime}</h3>
          </div>
        </div>*/
}

/*import moonImage from "../assets/destinations/image-moon.png";
import marsImage from "../assets/destinations/image-mars.png";
import europaImage from "../assets/destinations/image-europa.png";
import titanImage from "../assets/destinations/image-titan.png";*/

/*const imagePathMap = {
  moon: moonImage,
  mars: marsImage,
  europa: europaImage,
  titan: titanImage,
};*/
