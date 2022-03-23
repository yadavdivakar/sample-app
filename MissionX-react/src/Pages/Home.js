import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div>
      <div>This is the Home page</div>
      
      <div>
        <Link to="/About">About</Link>
      </div>
      <div>
        <Link to="/Contact">Contact</Link>
      </div>
      <div>
        <Link to="/Car/x">Model X</Link>
      </div>
      <div>
        <Link to="/Car/s">Model s</Link>
      </div>
      
    </div>
  );
}

export default Home;