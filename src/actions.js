export const ADD_USER = 'ADD_USER';

export function addUser(game) {
  return {
    type: ADD_USER,
    game
  }
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function processForm(data) {
  return dispatch => {
    return fetch('/auth/signup', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(addUser(data.user)));
  }
}
