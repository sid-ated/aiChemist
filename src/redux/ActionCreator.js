import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { authBaseUrl } from '../shared/authBaseUrl';
import { aisuggestUrl } from '../shared/aisuggestUrl';

export const fetchMedicine = () => (dispatch) => {

    dispatch(medicinesLoading(true));

    return fetch(baseUrl + 'medicines')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(medicines => dispatch(addMedicines(medicines)))
    .catch(error => dispatch(medicinesFailed(error.message)));
}

export const medicinesLoading = () => ({
    type: ActionTypes.MEDICINES_LOADING
});

export const medicinesFailed = (errmess) => ({
    type: ActionTypes.MEDICINES_FAILED,
    payload: errmess
});

export const addMedicines = (medicines) => ({
    type: ActionTypes.ADD_MEDICINES,
    payload: medicines
});

export const fetchSymptoms = () => (dispatch) => {

  return fetch(aisuggestUrl + 'get_symptoms')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(symptoms => dispatch(addSymptoms(symptoms)))
  .catch(error => dispatch(symptomsFailed(error.message)));
}

export const symptomsFailed = (errmess) => ({
  type: ActionTypes.SYMPTOMS_FAILED,
  payload: errmess
});

export const addSymptoms = (symptoms) => ({
  type: ActionTypes.ADD_SYMPTOMS,
  payload: symptoms
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const requestLogin = (creds) => {
  return {
      type: ActionTypes.LOGIN_REQUEST,
      creds
  }
}

export const receiveLogin = (response) => {
  return {
      type: ActionTypes.LOGIN_SUCCESS,
      token: response.token
  }
}

export const loginError = (message) => {
  return {
      type: ActionTypes.LOGIN_FAILURE,
      message
  }
}

export const loginUser = (creds) => (dispatch) => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds))

  return fetch(authBaseUrl + 'users/login', {
      method: 'POST',
      headers: { 
          'Content-Type':'application/json' 
      },
      body: JSON.stringify(creds)
  })
  .then(response => {
      if (response.ok) {
          return response;
      } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
      }
      },
      error => {
          throw error;
      })
  .then(response => response.json())
  .then(response => {
      if (response.success) {
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.token);
          localStorage.setItem('creds', JSON.stringify(creds));
          // Dispatch the success action
          //dispatch(fetchFavorites());
          dispatch(receiveLogin(response));
      }
      else {
          var error = new Error('Error ' + response.status);
          error.response = response;
          throw error;
      }
  })
  .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST
  }
}

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token');
  localStorage.removeItem('creds');
  //dispatch(favoritesFailed("Error 401: Unauthorized"));
  dispatch(receiveLogout())
}

export const registerUser = (creds) => (dispatch) => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestRegistration(creds))

  return fetch(authBaseUrl + 'users/register', {
      method: 'POST',
      headers: { 
          'Content-Type':'application/json' 
      },
      body: JSON.stringify(creds)
  })
  .then(response => {
      if (response.ok) {
          return response;
      } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
      }
      },
      error => {
          throw error;
      })
  .then(response => response.json())
  .then(response => {
      if (response.success) {
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.token);
          localStorage.setItem('creds', JSON.stringify(creds));
          // Dispatch the success action
          //dispatch(fetchFavorites());
          dispatch(receiveRegistration(response));
      }
      else {
          var error = new Error('Error ' + response.status);
          error.response = response;
          throw error;
      }
  })
  .catch(error => dispatch(registrationError(error.message)))
};

export const requestRegistration = (creds) => {
  return {
      type: ActionTypes.REGISTRATION_REQUEST,
      creds
  }
}

export const receiveRegistration = (response) => {
  return {
      type: ActionTypes.REGISTRATION_SUCCESS,
      token: response.token
  }
}

export const registrationError = (message) => {
  return {
      type: ActionTypes.REGISTRATION_FAILURE,
      message
  }
}
