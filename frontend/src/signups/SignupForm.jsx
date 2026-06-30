
import "./css/signupform.css"

function SignupForm(){
    return(
            <div className="signup-card">

                <h1>Create Account</h1>
                <p>Join and start sharing snippets</p>

                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username"
                />

                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="Enter your email"
                />

                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Create a password"
                />

                <label>Confirm Password</label>
                <input 
                    type="password" 
                    placeholder="Confirm your password"
                />

                <button className="signup-btn">
                    Sign Up
                </button>

                <div className="login-text">
                    Already have an account?
                    <span>Login</span>
                </div>

            </div>

    )

}
export default SignupForm;