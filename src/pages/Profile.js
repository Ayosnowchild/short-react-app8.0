import React, { useContext } from "react";
import "./home.css";
import Nav from "../components/Navbar/nav";
import { NameContext } from "../App";
function Profile() {
  const { name } = useContext(NameContext);
  return (
    <div>
      <Nav />
      <div className="home">
        <p>Welcome to your profile, {name}</p>
      </div>
    </div>
  );
}

export default Profile;

// context sends, set and maintain value across pages (props)
//  props/value is passed from parent to children
// inside parent -  create context/define value
// inside child - use context/consume value
// inside the children, you can also change value; if  value from parent is given by useState
