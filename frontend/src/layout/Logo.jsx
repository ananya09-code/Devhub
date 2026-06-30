
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./css/logo.css"

function Logo({onClick}){
    return(
        <div className="logo-main">
        <span onClick={onClick}>
            <FontAwesomeIcon icon={faCode} /> DevHub
        </span></div>
    )
}
export default Logo