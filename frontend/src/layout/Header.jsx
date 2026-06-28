
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./css/Header.css"
import Avatar from "./Avatar.jsx"
function Header({type}){

    return(
        <div className="Header-con">
            <div className="Header-right">
             <span> <FontAwesomeIcon icon={faCode} /> DevHub</span>
                 <input type="search" placeholder="Search..."   />
            </div>

          <Avatar logo={"Ab"}/>

        </div>

    )
}

export default Header