import moonImage from "../assets/destinations/image-moon.png";
import PlanetsNav from "../components/PlanetsNav";

function Destination() {

  return (
    <div className="destination-container">

      <div className="destination-body-container">
        <div className="planet-img-container">
          <img src={moonImage} />
        </div>

        <div className="planet-info-container">
          <PlanetsNav />
        </div>
      </div>
    </div>
    
  );
}

export default Destination;


