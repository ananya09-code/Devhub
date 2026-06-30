
import "./css/avater.css"

function Avatar({logo,onClick}){
    return(
        <div>
        <span className="profile-span" onClick={onClick}>{logo}</span>

        </div>
    )
}
export default Avatar