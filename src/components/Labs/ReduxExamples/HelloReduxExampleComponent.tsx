import React from "react";
import { useAppSelector } from "./hooks";

const HelloReduxExampleComponent = () => {
 const message = useAppSelector(({hello}) => hello.message);
 return(
   <h1>{message}</h1>
 );
};

export default HelloReduxExampleComponent;