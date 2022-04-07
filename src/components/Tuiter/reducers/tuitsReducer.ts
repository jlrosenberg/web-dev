import { tuits } from "../data/tuits";
import { CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT } from "./actions/tuitsActions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    // case "like-tuit":
    //   return state.map((tuit) => {
    //     if (tuit._id === action.tuit._id) {
    //       if (tuit.liked === true) {
    //         tuit.liked = false;
    //         tuit.stats.likes--;
    //       } else {
    //         tuit.liked = true;
    //         tuit.stats.likes++;
    //       }
    //       return tuit;
    //     } else {
    //       return tuit;
    //     }
    //   });
    case DELETE_TUIT:
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case CREATE_TUIT:
      return [action.newTuit, ...state];
    case UPDATE_TUIT:
      return state.map(
        tuit => tuit._id === action.tuit._id ?
          action.tuit : tuit)
    default:
      return tuits;
  }
};

export default tuitsReducer;
