import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import TodoList from "./Todo/TodoList";



const Labs: React.FC = () => {

  return (
    <>
      <h1>Labs</h1>
      <Link to="/hello">Hello</Link> |<Link to="/tuiter">Tuiter</Link>
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      {/* <SampleComponent
        title="MyTitle"
        person={{ name: "josh", age: 22 }}
        count={count}
        setCount={setCount}
      /> */}
    </>
  );
};

export default Labs;
