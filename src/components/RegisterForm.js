import React from "react";

const RegisterForm = () => {
  return (
    <>
      <form>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" id="firstname" />

        <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastname" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterForm;
