
import Header from "../layout/Header";
import {profileData} from "../labs/datatest.js"
import ProfileHeader from "../profile/ProfileHeader";
function Profile() {
    return (
        <div className="Profile">
            <Header />
            <ProfileHeader data={profileData} />

            <h1>Profile Page</h1>
            <p>This is the profile page content.</p>
        </div>
    );
}   
export default Profile;