import "./css/profilestat.css";

function ProfileStat({ title, value }) {
  return (
    <div className="profile-stat">
      <p>{value}</p>
      <h3>{title}</h3>
    </div>
  );
}
export default ProfileStat;