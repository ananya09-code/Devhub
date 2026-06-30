import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./css/uploadbutt.css"
import { useNavigate } from "react-router-dom";
function UploadButt({}){
    const navigate = useNavigate();

    return(
        <button className="create-btn" onClick={()=>navigate("/upload")}>
            <FontAwesomeIcon icon={faPlus}/>
            Create
        </button>
    )
}

export default UploadButt