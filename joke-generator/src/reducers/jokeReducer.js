import { GET_JOKE } from "../actions/joke";

const reducer = (state = [], action) => {
  // console.log("STATE", state, "ACTION", action.payload)
  switch (action.type) {
    case GET_JOKE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
