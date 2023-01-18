import React from "react";
import RegisterForm from "./components/RegisterForm";
import ShowTitle from "./components/ShowTitle";

function App() {
  return (
    <>
      <ShowTitle title="Register Form" />
      <RegisterForm />
      <ShowTitle title="Footer" />
    </>
  );
}

export default App;
