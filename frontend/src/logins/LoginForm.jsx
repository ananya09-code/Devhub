
import "./css/loginform.css"

function LoginForm() {
    return (
        <div className="login-page">

            <div className="login-card">

                <h1>Welcome Back</h1>
                <p>Login to continue to your account</p>

                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="Enter your email"
                />

                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password"
                />

                <div className="login-options">
                    <span>Forgot password?</span>
                </div>

                <button className="login-btn">
                    Login
                </button>

                <div className="signup-text">
                    Don't have an account? 
                    <span>Create account</span>
                </div>

            </div>

        </div>
    );
}

export default LoginForm;