import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./css/notifcationbutt.css"

function Notificationbutt() {
    const [count] = useState(3); // fake notifications

    return (
        <div className="notif-wrapper">
            <FontAwesomeIcon icon={faBell} className="notif-icon" />

            {count > 0 && (
                <span className="notif-badge">{count}</span>
            )}
        </div>
    );
}

export default Notificationbutt;