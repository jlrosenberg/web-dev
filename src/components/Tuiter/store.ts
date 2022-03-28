import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import {combineReducers, createStore} from "redux";
import tuitsReducer from "./reducers/tuitsReducer";
import whoReducer from "./reducers/whoReducer";

const reducer = combineReducers({
  tuits: tuitsReducer, who: whoReducer
});


export const store = createStore(reducer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector