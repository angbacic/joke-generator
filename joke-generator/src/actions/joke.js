import request from "superagent";

export const GET_JOKE = "GET_JOKE";

const baseUrl = "https://official-joke-api.appspot.com/random_joke";

export const getCurrentJoke = joke => {
  console.log("joke", joke);
  return {
    type: GET_JOKE,
    payload: joke
  };
};

export function getJoke() {
  // console.log('random image action')
  return function(dispatch) {
    request
      .get(`${baseUrl}`)
      .then(response => {
        const joke = response.body;
        console.log("request", response.body);

        dispatch(getCurrentJoke(joke));
      })
      .catch(error => {
        console.error("Error");
      });
  };
}
