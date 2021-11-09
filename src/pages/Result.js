import React from "react";

import testData from "../testData.json";
import { kakaoShare } from "../elements/share";

const findResult = (select) => {
  const maxValue = Math.max.apply(null, select);
  var result = 0;

  select.forEach((item, idx) => {
    if (item === maxValue) {
      result = idx;
    }
  });

  return result;
};

const Result = (props) => {
  const { select } = props.location.state;
  const result = findResult(select);

  return (
    <>
      <h1>{testData.infoList[result].name}</h1>
      <h3>{testData.infoList[result].desc}</h3>
      <button onClick={kakaoShare}>공유하기</button>
    </>
  );
};

export default Result;

/*
Result
mouse,0
cow,1
tiger,2
rabbit,3
dragon,4
snake,5
horse,6
sheep,7
monkey,8
chick,9
dog,10
pig,11
*/
