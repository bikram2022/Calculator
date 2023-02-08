import React from "react";
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import Button from "./Button";
import ButtonBox from "./ButtonBox";

let buttonValues = ["c","+-","%","⌫",
            7,8,9,"/",
            4,5,6,"*",
            1,2,3,"-",
            0,".","=","+"];

function App() {
  return (
    <div>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {buttonValues.flat().map((btn,index) => {
            return (<Button key = {index}>{btn}</Button>);
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
