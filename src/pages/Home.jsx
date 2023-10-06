import "../App.css";

function Home() {
  return (
    <div className="home">
      <div className="content home-content">
        <div className="travel-content">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p className="home-description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="explore-container">
          <div className="explore">
            <h3>Explore</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
