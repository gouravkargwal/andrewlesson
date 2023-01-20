import React from "react";
import RegisterForm from "./components/RegisterForm";
import RegisterForm2 from "./components/RegisterForm2";
import ShowTitle from "./components/ShowTitle";

function App() {
  return (
    <>
      <ShowTitle title="Register Form" />
      <RegisterForm />
      {/* <RegisterForm2 /> */}
      <ShowTitle title="Footer" />
    </>
  );
}

export default App;
