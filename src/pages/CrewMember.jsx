import { useParams } from "react-router-dom";
import { getCrewData } from "../../firebase";
import firstImg from "../assets/crew/image-douglas-hurley.png";
import secondImg from "../assets/crew/image-mark-shuttleworth.png";
import thirdImg from "../assets/crew/image-victor-glover.png";
import fourthImg from "../assets/crew/image-anousheh-ansari.png";

//const crewData = await getCrewData();


/*let crewData
getCrewData().then((result) => {
  crewData = result
}).catch((error) => {
  alert(error.message)
})*/

const crewImgPath = {
  1: firstImg,
  2: secondImg,
  3: thirdImg,
  4: fourthImg,
};

async function CrewMember() {
  const crewData = await getCrewData();
  const params = useParams();

  const filteredCrew = crewData.filter((crew) => crew.id === params.id);
  console.log(filteredCrew)


  const crewMember = filteredCrew[0];

  return (
    <div className="crew">
      <div className="content crew-content">

        <div className="crew-img-container">
          <img src={crewImgPath[params.id]} />
        </div>

        <div className="crew-members">
          <h3 className="position" id="position">
            {crewMember.position}
          </h3>
          <h2 className="member" id="memeber">
            {crewMember.name}
          </h2>
          <p id="member-role">{crewMember.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CrewMember;
