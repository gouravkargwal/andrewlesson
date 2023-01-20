import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });

    // Losses the previous state value
    // setFormData({ [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          onChange={changeHandler}
          name="fName"
        />

        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          name="lName"
          onChange={changeHandler}
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={changeHandler} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
        />

        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterForm;
