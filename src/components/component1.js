import React, { useState, useEffect } from "react";
import Component2 from "./component2";

export default function Component1({handleParent, test}) {
    return (<>
    "Hello component 1" {test} <Component2 new1="sarvesh"></Component2>
    <button onClick={event => handleParent(100)}>Click</button>

    </>);
}