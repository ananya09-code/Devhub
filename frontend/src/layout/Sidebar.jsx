import "./css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faUser,
  faChartLine,
  faBell,
  faCircleQuestion,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Sidebar() {
    const [activeLink, setActiveLink] = useState("Home");

    return (
        <div className="Sidebar">
            <div className="Sidebar-upper">
                <div className="Sidebar-logo">DevHub</div>

                <div className="Sidebar-links">
                    <span
                        className={`Sidebar-link ${activeLink === "Home" ? "active" : ""}`}
                        onClick={() => setActiveLink("Home")}
                    >
                        <FontAwesomeIcon icon={faHouse} /> Home
                    </span>

                    <span
                        className={`Sidebar-link ${activeLink === "Explore" ? "active" : ""}`}
                        onClick={() => setActiveLink("Explore")}
                    >
                        <FontAwesomeIcon icon={faCompass} /> Explore
                    </span>

                    <span
                        className={`Sidebar-link ${activeLink === "Profile" ? "active" : ""}`}
                        onClick={() => setActiveLink("Profile")}
                    >
                        <FontAwesomeIcon icon={faUser} /> Profile
                    </span>

                    <span
                        className={`Sidebar-link ${activeLink === "Trading" ? "active" : ""}`}
                        onClick={() => setActiveLink("Trading")}
                    >
                        <FontAwesomeIcon icon={faChartLine} /> Trading
                    </span>

                    <span
                        className={`Sidebar-link ${activeLink === "Notifications" ? "active" : ""}`}
                        onClick={() => setActiveLink("Notifications")}
                    >
                        <FontAwesomeIcon icon={faBell} /> Notifications
                    </span>
                </div>
            </div>

            <div className="Sidebar-lower">
                <span
                    className={`Sidebar-link ${activeLink === "Help" ? "active" : ""}`}
                    onClick={() => setActiveLink("Help")}
                >
                    <FontAwesomeIcon icon={faCircleQuestion} /> Help
                </span>
 
                <span
                    className={`Sidebar-link ${activeLink === "Settings" ? "active" : ""}`}
                    onClick={() => setActiveLink("Settings")}
                >
                    <FontAwesomeIcon icon={faGear} /> Settings
                </span>
            </div>
        </div>
    );
}

export default Sidebar;