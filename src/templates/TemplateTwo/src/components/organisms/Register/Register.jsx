import React from "react";

export function Register() {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
