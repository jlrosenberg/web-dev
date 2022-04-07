import { tuits } from "../data/tuits";
import { CREATE_TUIT, DELETE_TUIT } from "./actions/tuitsActions";

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case "FIND_ALL_TUITS":
      return action.tuits;
    case "like-tuit":
      return state.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });
    case DELETE_TUIT:
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case CREATE_TUIT:
      return [...state, action.newTuit];

    case "create-tuit":
      const newTuit = {
        tuit: action.tuit,
        _id: new Date().getTime() + "",
        postedBy: {
          username: "ReactJS",
        },
        stats: {
          retuits: 123,
          likes: 456,
          replies: 789,
        },
      };
      return [newTuit, ...state];
    default:
      return tuits;
  }
};

export default tuitsReducer;
