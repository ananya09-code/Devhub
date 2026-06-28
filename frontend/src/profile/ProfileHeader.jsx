import "./css/profileheader.css";

function ProfileHeader({ data }) {
    return (
        <div className="profile-header">
            <div className="profile-header-content">
                {/* Avatar */}
                <div className="avatar" style={{ backgroundColor: data.user.avatarColor || "#3b82f6" }}>
                    {data.user.initials || "AK"}
                </div>

                <div>
                    <h2>{data.user.name}</h2>
                    <p>{data.user.username} • {data.user.title}</p>
                    
                    <div className="profile-tags">
                        {data.user.tags.map((tag, index) => (
                            <span key={index} className="profile-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}