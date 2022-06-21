import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
