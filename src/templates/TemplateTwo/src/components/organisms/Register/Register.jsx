import React from "react";

export function Register() {
  return (
    <div className="Register">
      <h2>Register</h2>
      <form className="Register__Form">
        <label for="mail">Regist for the event</label>
        <input type="email" name="email" id="mail" placeholder="Email" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
