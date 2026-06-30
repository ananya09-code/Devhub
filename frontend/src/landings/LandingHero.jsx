import "./css/landinghero.css"
import {landingData} from "../labs/LandingData"
import Button from "../layout/Button"
import { useNavigate } from "react-router-dom";
function LandingHero(){
    const hero=landingData.hero
      const navigate = useNavigate();
    return(
        <div className="hero-con">
            <h1>
                {hero.title}
            </h1>
            <h1>
                {hero.subtitle}
            </h1>
            <p>
                {hero.description}
            </p>

            <div className="land-butt">
                <Button buttontext={hero.buttons[0]} onClick={()=>navigate('/signup')}/>
                <Button buttontext={hero.buttons[1]}/>
            </div>


        </div>
    )
}
export default LandingHero