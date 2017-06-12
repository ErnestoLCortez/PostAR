import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const loginUser = ({ email, password }) => {
  return (dispatch) => {

    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        Actions.main();
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: LOGIN_USER_FAIL })
      });
  };
};
