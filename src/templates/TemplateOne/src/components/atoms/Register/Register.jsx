import React from "react";

export function Register() {
  return (
    <div className="RegisterOne">
      <h2>Save Your Place</h2>
      <form className="Register__Form">
        <label for="mail"></label>
        <input type="email" name="email" id="mail" placeholder="Email" />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
}