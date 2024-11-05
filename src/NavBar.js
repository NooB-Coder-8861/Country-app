import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to='/'><h3>Where in the world?</h3></Link>
            {/* <p onClick={() => {document.body.classList.toggle("dark")}}>Dark Mode</p> */}
        </nav>
    );
}
 
export default NavBar;