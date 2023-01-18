import React from "react";

const ShowTitle = (props) => {
  let a = { name: "Gourav", age: 22 };
  console.log(a.name);

  console.log(props);

  return <h1>{props.title}</h1>;
};

export default ShowTitle;
