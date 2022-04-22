import "./Header.css";
import Veg from "../images/veg.jpg";

function Header() {
    return (
        <div className="header">
            
            <div className="pic">
                <img src={Veg} alt="Veg"></img>
            </div>

            <div className="input">
                <input placeholder=" Search.."></input>
                <button>Search</button>   
            </div>
        
        </div>
    )
};

export default Header;