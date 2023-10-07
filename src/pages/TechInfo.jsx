import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { getTechData } from "../../firebase";

import launchmobile from "../assets/technology/image-launch-vehicle-landscape.jpg";
import launchdesktop from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacemobile from "../assets/technology/image-space-capsule-landscape.jpg";
import spacedesktop from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportmobile from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportdesktop from "../assets/technology/image-spaceport-portrait.jpg";

const imagePathMobile = {
  1: launchmobile,
  2: spacemobile,
  3: spaceportmobile,
};

const imagePathDesktop = {
  1: launchdesktop,
  2: spacedesktop,
  3: spaceportdesktop,
};

//const techData = await getTechData();

let techData;
getTechData().then((result) => {
  techData = result
}).catch((error) => {
  alert(error.message)
})

function TechInfo() {
  const params = useParams();
  const filteredTech = techData?.filter((tech) => tech.id === params.id);

  const technology = filteredTech[0];

  const isMobile = useMediaQuery({ maxWidth: 1007 });
  return (
    <div className="technology">
      <div className="content technology-content">
        <div className="tech-body-container">
          <div className="tech-img-container">
            {isMobile ? (
              <img src={imagePathMobile[params.id]} alt="Mobile Image" />
            ) : (
              <img
                src={imagePathDesktop[params.id]}
                alt="Desktop Image"
                className="desktop-img"
              />
            )}
          </div>

          <div className="technology-description">
            <h5 className="terminology">The terminology...</h5>
            <h2 className="tech-type">{technology.name}</h2>
            <p className="tech-manual">{technology.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechInfo; /*className="tech-body-container"

/*<div className="technology">
      <div className="content technology-content"> 
        <div className="tech-body-container"> {/*className="tech-content-container" 
        <div className="tech-img-container">
        {isMobile ? (
            <img src={imagePathMobile[params.id]} alt="Mobile Image" />
          ) : (
            <img
              src={imagePathDesktop[params.id]}
              alt="Desktop Image"
              className="desktop-img"
            />
          )}
        </div>

       

        <div className="technology-description">
          <h5 className="terminology">The terminology...</h5>
          <h2 className="tech-type">{technology.name}</h2>
          <p className="tech-manual">{technology.description}</p>
        </div>
      </div>
    </div>
  </div>
); */
