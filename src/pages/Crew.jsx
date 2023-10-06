import crewMemberImg from "../assets/crew/image-douglas-hurley.png";


function Crew() {

  return (
    <div className="crew">
      <div className="content crew-content">
        <div className="crew-img-container">
          <img src={crewMemberImg} />
        </div>

        <div className="crew-members">
          <h3 className="position" id="position">
            Commander
          </h3>
          <h2 className="member" id="memeber">
            Douglas Hurley
          </h2>
          <p id="member-role">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Crew;

