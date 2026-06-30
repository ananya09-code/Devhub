import "./css/profileheader.css";
import Skill from "../layout/Skill";
import Avatar from "../layout/Avatar";
import Button from "../layout/Button";  
function ProfileHeader({ data }) {
    return (
        <div className="profile-header">
            <div className="profile-header-content">
                <Avatar logo={data.user.initials || "AK"} />

                <div>
                    <h2>{data.user.name}</h2>
                    <p>{data.user.username} • {data.user.title}</p>
                    
                    <div className="profile-tags">
                        {data.user.tags.map((tag, index) => (
                          <Skill key={index} tag={tag} />
                        ))}
                    </div>
                </div>
                
                
            </div>
            <Button buttontext="Follow" className="cos-butt.small" />
        </div>
    );
}
 export default ProfileHeader;