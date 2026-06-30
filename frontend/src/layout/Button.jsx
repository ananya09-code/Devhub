import "./css/button.css";

function Button({ buttontext, onClick }) {
    return (
        <button className="cos-butt" onClick={onClick}>
            {buttontext}
        </button>
    );
}

export default Button;