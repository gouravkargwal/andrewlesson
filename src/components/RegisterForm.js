import React, { useState } from "react";

const RegisterForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fNameHandler = (event) => {
    setFName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(fName, lName, email, password);
    setFName("");
    setLName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          onChange={fNameHandler}
          value={fName}
        />

        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          onChange={(e) => {
            setLName(e.target.value);
          }}
          value={lName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />

        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterForm;
