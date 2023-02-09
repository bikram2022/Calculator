import React, { useContext } from "react";
import { CalcContext } from "../context/CalContext";
import { Textfit } from 'react-textfit';

function Screen() {

    const { calc } = useContext(CalcContext)

    return <Textfit className="screen" max="70" mode="single">
        {calc.num?calc.res:0}
    </Textfit>
}

export default Screen;