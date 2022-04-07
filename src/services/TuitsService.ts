const TUITS_API = 'http://localhost:4000/api/tuits';

export const updateTuit = async (tuit) => {}

export const findAllTuits = async () => {
  const response = await fetch(TUITS_API);
  const tuits = await response.json()
  return tuits;
 }
 

export const deleteTuit = async (tuit) => {
  const response = await fetch(`${TUITS_API}/${tuit._id}`,{
    method: 'DELETE',
  });
  return await response.json()
 }

 export const createTuit = async (tuit) => {
  const response = await fetch(TUITS_API, {
    method: 'POST',
    body: tuit
  })
  return await response.json()
 }
 
 