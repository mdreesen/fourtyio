export function LoginForm() {
  return (
    <form>
      <div>
        <label id="signupEmailLabel" htmlFor="signup-username">
          Email
        </label>
        <div>
          <input id="signup-email-input" name="email" placeholder="Required" />
        </div>
      </div>
      <div>
        <label id="signupPasswordLabel" htmlFor="signup-password">
          Password (minimum of 4 characters)
        </label>
        <div>
          <input
            id="signup-password-input"
            type="password"
            name="password"
            placeholder="Required"
            autoComplete="on"
          />
        </div>
      </div>
    </form>
  );
}
