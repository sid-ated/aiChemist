import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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

