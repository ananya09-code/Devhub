
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {landingData} from "../labs/LandingData"
import "./css/landingfeatures.css"
function LandingFeatures(){
    return(
        <div className="landfeatures-con">
        {landingData.features.map((item,index)=>(

            <div className="feature-card" key={index}>

                <FontAwesomeIcon 
                    className="feature-icon"
                    icon={item.icon}
                />

                <h3>{item.title}</h3>

                <p>{item.description}</p>

            </div>

        ))}

        </div>
    )
}
export default LandingFeatures;