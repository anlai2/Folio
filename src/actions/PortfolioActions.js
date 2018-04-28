import firebase from 'firebase'
    ; import { Actions } from 'react-native-router-flux';
import {
    COIN_CHANGED,
    ASSETS_CHANGED,
    COINS_SAVED
} from './types';

export const coinChanged = (id) => {
    return {
        type: COIN_CHANGED,
        payload: id
    }
}

export const assetsChanged = (amount) => {
    return {
        type: ASSETS_CHANGED,
        payload: amount
    }
}

export const saveCoins = ({ id, amount }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: COINS_SAVED });
        firebase.database().ref(`/portfolios/${currentUser.uid}/`)
            .push({ id, amount })
    }
}