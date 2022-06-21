import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
