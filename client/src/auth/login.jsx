import "./signUp.css";

function Login() {
  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back!</h1>
          <p>Please login to your account</p>
        </div>

        <form className="login-form" action="/Login" method="POST">
          <div className="form-group">
            <label>Email</label>
            <input type="text" placeholder="Username/Email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          <div className="login-footer">
            <p>
              Don’t have an account?{" "}
              <a href="/signup">Sign up</a>
            </p>
          </div>

          <div className="divider">
            <p>Or login with</p>
            <div className="social-login">
              <a href="/auth/google">
                <img src="/images/google.png" alt="Google" />
                <span>Login with Google</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
