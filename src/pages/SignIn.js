import React, { useContext } from "react";
import Nav from "../components/Navbar/nav";
import { NameContext } from "../App";

function SignIn() {
  const { name } = useContext(NameContext);
  return (
    <div>
      <Nav />
      <p>Signed in as {name}</p>
    </div>
  );
}

export default SignIn;
