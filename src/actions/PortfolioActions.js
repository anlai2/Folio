import firebase from 'firebase';
import {
  COIN_CHECKED,
  COIN_UNCHECKED,
  COINS_SAVED,
  COINS_FETCHED,
  ASSETS_CHANGED,
  ASSETS_SAVED,
  PORTFOLIO_FETCH,
} from './types';

export const coinChecked = ({ value }) => ({
  type: COIN_CHECKED,
  payload: value,
});

export const coinUnchecked = ({ value }) => ({
  type: COIN_UNCHECKED,
  payload: value,
});

export const coinsSaved = () => (dispatch) => {
  dispatch({ type: COINS_SAVED });
};
export const coinsFetched = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: COINS_FETCHED });
    firebase.database().ref(`/portfolios/${currentUser.uid}/checked`)
      .on('value', (snapshot) => {
        dispatch({ type: COINS_FETCHED, payload: snapshot.val() });
      });
  };
};

export const assetChanged = ({ coin, value }) => ({
  type: ASSETS_CHANGED,
  payload: { coin, value },
});

export const assetSaved = (coins) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/portfolios/${currentUser.uid}`)
      .set(coins)
      .then(dispatch({ type: ASSETS_SAVED }));
  };
};

export const fetchPortfolio = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`portfolios/${currentUser.uid}/coins`)
      .on('value', (snapshot) => {
        dispatch({ type: PORTFOLIO_FETCH, payload: snapshot.val() });
      });
  };
};
