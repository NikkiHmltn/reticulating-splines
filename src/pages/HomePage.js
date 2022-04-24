import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <div className="homepage">
       <Helmet>
        <title>Reticulating Splines - Home</title>
      </Helmet>
      <p>Home Page</p>
    </div>
  );
}

export default HomePage;