import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  //on load route/url it is attached to, redirect if not logged in
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
};
