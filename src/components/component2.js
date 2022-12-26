import React, { useState, useEffect } from "react";
import Component3 from "./component3";

export default function Component2({new1}) {
    return (<>
        Hello component 2 + {new1 +"~~~"}<Component3></Component3>
        </>);
}