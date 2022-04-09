import React from "react";

import hello from "./reducers/hello";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import Todos from "./TodosComponent";
import todos from "./reducers/todosReducer";

const reducers =
      combineReducers({hello, todos})
const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


const ReduxExamples = () => {
 return(
   <Provider store={store}>
     <div>
       <h2>Redux Examples</h2>
       <Todos />
       <HelloReduxExampleComponent/>
     </div>
   </Provider>
 );
};
export default ReduxExamples;