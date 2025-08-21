import { Link } from "react-router-dom";

export default function NavBar() {

  
  
  return (
    <nav className="navbar">
      <Link to="/">Vandaag</Link>
      <Link to="/week">Week</Link>
    </nav>
  );
}
