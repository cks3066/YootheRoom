import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/test");
  };
  return (
    <>
      <div>here's home</div>
      <button onClick={onClick}>Go to Test</button>
    </>
  );
};

export default Home;
