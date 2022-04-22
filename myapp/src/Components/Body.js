import "./Body.css";
import Img1 from "../images/Food.jpg";
import Img2 from "../images/healthy.jpg";
import Img3 from "../images/smoothie.jpg";

function Body() {
    return (
        <div className="body">
            <img src={Img1} alt="food" id="food" hspace="50"></img>
            
            <img src={Img2} alt="healthy" id="food" hspace="50"></img>

            <img src={Img3} alt="smoothie" id="food" hspace="50"></img>
            
        </div>

    )
}

export default Body;