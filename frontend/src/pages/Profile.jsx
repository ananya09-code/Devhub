import Header from "../layout/Header";
import ProfileHeader from "../profile/ProfileHeader";
import ProfileStat from "../profile/ProfileStat";
import Postcontiner from "../layout/Postcontiner";
import "./css/profile.css";

import { profileData, data } from "../labs/datatest.js";

function Profile() {

    const stats = profileData?.stats || [];

    return (
        <div className="profile-page">

            <Header />

            <div className="profile-container">

                <ProfileHeader data={profileData} />

                <div className="profile-stats">
                    {stats.map((stat) => (
                        <ProfileStat
                            key={stat.label}
                            title={stat.label}
                            value={stat.value}
                        />
                    ))}
                </div>

                <Postcontiner posts={data} />

            </div>
        </div>
    );
}

export default Profile;