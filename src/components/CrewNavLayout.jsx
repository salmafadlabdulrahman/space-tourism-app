import { getCrewData } from "../../firebase";
import { NavLink, Outlet } from "react-router-dom";

//const crewData = await getCrewData();

/*let crewData;
getCrewData().then((result) => {
  crewData = result
}).catch((error) => {
  alert(error.message)
})*/

async function CrewNavLayout() {
  const crewData = await getCrewData();

  return (
    <div>
      <div className="content crew-content">
      <div className="crew-body">
        <h2 className="meet-crew" id="first">
          <span>02</span> Meet your crew
        </h2>
        <div className="crew-nav">
          <ul>
            {crewData?.map((crew) => (
              <NavLink key={crew.id} to={`./crew/${crew.id}`}></NavLink>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <Outlet />
    </div>
  );
}

export default CrewNavLayout;
