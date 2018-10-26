import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from './../config';
import { normalizeResponseErrors } from './utils';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const registrationRequest = () => ({
    type: REGISTRATION_REQUEST
});

export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const registrationSuccess = () => ({
    type: REGISTRATION_SUCCESS
});

export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const registrationError = error => ({
    type: REGISTRATION_ERROR,
    error
});

export const registerUser = user => dispatch => {
    dispatch(registrationRequest);
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => {
          dispatch(registrationSuccess())})
        .catch(err => {
          dispatch(registrationError(err));
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {

                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
export const createUserStats = () => (dispatch, getState) => {
  const REGISTRATIONToken = getState().REGISTRATION.REGISTRATIONToken;
  return fetch(`${API_BASE_URL}/users/stats`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          REGISTRATIONorization: `Bearer ${REGISTRATIONToken}`
      },
      // body: JSON.stringify({username})
  })
  .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .catch(err => {
          const {reason, message, location} = err;
          if (reason === 'ValidationError') {
              // Convert ValidationErrors into SubmissionErrors for Redux Form
              return Promise.reject(
                  new SubmissionError({
                      [location]: message
                  })
              );
          }
      });
}