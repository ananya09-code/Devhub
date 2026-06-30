import {skillcolor} from "../labs/Skilcolor";
function Skill({ tag, index }) {
    const skill = skillcolor.find((s) => s.name === tag);
    return <span key={index}
    style={{ backgroundColor: skill ? skill.color : "#3b82f6" }}
    
    
    className="profile-tag">{tag}</span>;
}
export default Skill;