import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Home = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/test");
  };

  axios
    .get("/test", {
      headers: {
        withCredentials: true,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div>here's home</div>
      <button onClick={onClick}>Go to Test</button>
    </>
  );
};

export default Home;
