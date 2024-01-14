import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import googleIcon from "../../Images/google-icon.svg";
function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const showErrorText = false;

  const handleSubmit = () => {};

  const handleloginWithGoogle = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2>Welcome back!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email</label>
          <br />
          <input
            type="email"
            id="login-email"
            placeholder="Enter your email"
            name="email"
            ref={emailRef}
          />
          <br />
          <label htmlFor="login-pass">Password</label>
          <br />
          <input
            type="password"
            id="login-pass"
            placeholder="Enter your password"
            name="password"
            ref={passwordRef}
          />
          <div className={styles.loginOption}>
            <div className={styles.remember}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <span className={styles.forgotPassword}>Forgot password</span>
          </div>
          <p
            className="login-error-text"
            style={{ display: showErrorText ? "block" : "none" }}
          >
            wrong email or password
          </p>
          <button type="submit">
          Sign In
          </button>
        </form>
        <button
          className={styles.continueWithGoogle}
          onClick={handleloginWithGoogle}
        >
          <img src={googleIcon} alt="google icon" />
          <span>
          Continue with google
          </span>
        </button>
        <span className={styles.signup}>
          Don&apos;t have an account?<Link to="/signup"> Sign Up</Link>{" "}
        </span>
      </div>
    </div>
  );
}

export default Login;
