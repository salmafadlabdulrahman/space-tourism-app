import { NavLink, Outlet } from "react-router-dom";
import { getTechData } from "../../firebase";
import { useEffect, useState } from "react";

//const techData = await getTechData();


function TechNavLayout() {
  const [techNav, setTechNav] = useState()

  useEffect(() => {
    getTechData().then(data => setTechNav(data))
    
  }, [])

  const techResult = techNav?.map((tech) => (
    <>
      <li className="tech-link">
        <NavLink to={`/technology/${tech.id}`} key={tech.id}>
          {tech.id}
        </NavLink>
      </li>
    </>
  ));

  return (
    <div className="technology">
      <div className="content technology-content">
        <h2 className="tech-title" id="tech-title">
          <span>03</span> Space Launch 101
        </h2>

        <div className="contents">
          <div className="tech-nav">
            <ul>{techResult}</ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TechNavLayout;
