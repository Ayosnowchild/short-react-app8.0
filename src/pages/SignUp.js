import React, { useContext, useState } from "react";
import { NameContext } from "../App";
import "./SignUp.css";
import Nav from "../components/Navbar/nav";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const router = useNavigate();
  const { setName } = useContext(NameContext);
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setName(input);
    router("/");
  }
  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className="form-sec">
          <label>input a username:</label>
          <input
            name="name"
            value={input}
            placeholder="Username"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
