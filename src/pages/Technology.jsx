import { useMediaQuery } from "react-responsive";
import mobileImage from "../assets/technology/image-launch-vehicle-landscape.jpg";
import desktopImage from "../assets/technology/image-launch-vehicle-portrait.jpg";

function Technology() {
  const isMobile = useMediaQuery({ maxWidth: 1007 });
  return (
    <div className="technology">
      <div className="content technology-content">

        <div className="tech-body-container">
          <div className="tech-img-container">
            {isMobile ? (
              <img src={mobileImage} alt="Mobile Image" />
            ) : (
              <img
                src={desktopImage}
                alt="Desktop Image"
                className="desktop-img"
              />
            )}
          </div>

          <div className="technology-description">
            <h2 className="tech-type">Launch vehicle</h2>
            <p className="tech-manual">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earths surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, its quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
