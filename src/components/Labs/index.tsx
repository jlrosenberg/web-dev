import React from "react";
import { Link } from "react-router-dom";
// import Classes from "./Classes";
// import ConditionalOutput from "./ConditionalOutput";
import ReduxExamples from "./ReduxExamples";
// import Styles from "./Styles";
// import TodoList from "./Todo/TodoList";

const Labs: React.FC = () => {
  return (
    <>
      <h1>Labs</h1>
      <Link to="/hello">Hello</Link> |<Link to="/tuiter">Tuiter</Link>
      {/* Commenting out stuff from last weeks lab */}
      {/* <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes /> */}
      <ReduxExamples />
    </>
  );
};

export default Labs;
