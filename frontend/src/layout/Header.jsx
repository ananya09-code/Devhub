import "./css/header.css"
import Avatar from "./Avatar.jsx"
import UploadButt from "./UploadButt.jsx";
import Notificationbutt from "../layout/Notifcationbutt.jsx"
import Logo from "../layout/Logo.jsx";
import Search from "../layout/Search.jsx";
import Button from "../layout/Button.jsx"
import { useNavigate } from "react-router-dom";

function Header({type, loginstats}) {
    const navigate = useNavigate();

    return (
        <div className="Header-con">

            <div className="Header-left0">
                <Logo onClick={()=>navigate("/home")} />

                {loginstats && (
                    <Search />
                )}

            </div>


            {loginstats ? (

                <div className="Header-right">
                    <UploadButt />
                    <Notificationbutt />
                    <Avatar logo={"Ab"} onClick={()=>navigate("/profile")} />
                </div>

            ) : (

                <div className="Header-right">
                    <Button buttontext={"Login"} onClick={()=>navigate("/login")}/>
                    <Button buttontext={"SignUp"} onClick={()=>navigate("/signup")} />
                </div>

            )}

        </div>
    )
}

export default Header;