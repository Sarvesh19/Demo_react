import React, { useState, useEffect, useContext  } from "react";
import {userDetailContext} from './TextForm'

export default function Component3() {

    const contextData =  useContext(userDetailContext);

    return (<>
    "Hello component 3"  {contextData}
    </>);
}