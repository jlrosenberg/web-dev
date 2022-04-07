import * as service from "../../../../services/TuitsService";

export const CREATE_TUIT = "CREATE_TUIT";
export const FIND_ALL_TUITS = "FIND_ALL_TUITS";
export const UPDATE_TUIT = "UPDATE_TUIT";
export const DELETE_TUIT = "DELETE_TUIT";

export const updateTuit = async (dispatch, tuit) => {};

export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();
  dispatch({
    type: FIND_ALL_TUITS,
    tuits,
  });
};

export const deleteTuit = async (dispatch, tuit) => {
  const response = await service.deleteTuit(tuit);
  dispatch({
    type: DELETE_TUIT,
    tuit,
  });
};

export const createTuit = async (dispatch, tuit) => {
  const newTuit = await service.createTuit(tuit);
  dispatch({
    type: CREATE_TUIT,
    newTuit
  });
 }
 