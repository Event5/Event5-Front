import React from "react";
import { BigLogo, ButtonAlt } from "../components/atoms";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <BigLogo />
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/about">About</Link>
    </>
  );
}
