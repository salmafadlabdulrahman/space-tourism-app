import { useParams } from "react-router-dom";
import { getPlanetsData } from "../../firebase";

import moonImage from "../assets/destinations/image-moon.png";
import marsImage from "../assets/destinations/image-mars.png";
import europaImage from "../assets/destinations/image-europa.png";
import titanImage from "../assets/destinations/image-titan.png";
import PlanetsNav from "../components/PlanetsNav";

const imagePathMap = {
  moon: moonImage,
  mars: marsImage,
  europa: europaImage,
  titan: titanImage,
};

const planets = await getPlanetsData();

function PlanetInfo() {
  const params = useParams();
  const filtered = planets.filter((planet) => planet.name === params.name);

  const filteredPlanet = filtered[0];

  return (
    <div className="destination-container">
      <div className="destination-body-container">
        <div className="planet-img-container">
          <img src={imagePathMap[params?.name]} />
        </div>

        <div className="planet-info-container">
          <div className="planets-nav">
            <PlanetsNav />
          </div>

          <div className="destination-information">
            <div className="planet">
              <h1 className="planet-name">{filteredPlanet?.name}</h1>
              <p className="planet-description">
                {filteredPlanet?.description}
              </p>
            </div>
          </div>

          <div className="planet-numbers-container">
            <div className="planet-distance-container">
              <h4>Avg. Distance</h4>
              <h3>{filteredPlanet?.distance}</h3>
            </div>
            <div className="planet-travel-container">
              <h4>Est. Travel Time</h4>
              <h3>{filteredPlanet?.travelTime}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetInfo;
