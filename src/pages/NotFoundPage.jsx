import React from "react";

import { NotFound } from "../components/templates";

import image404 from "../assets/images/notFound.svg";

export function NotFoundPage() {
  return <NotFound image={image404} />;
}
