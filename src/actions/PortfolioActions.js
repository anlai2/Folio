import firebase from 'firebase'; 
import { Actions } from 'react-native-router-flux';
import {
    COINS_CHANGED,
    ASSETS_CHANGED,
    COINS_SAVED
} from './types';

export const coinChanged = (id) => {
    return {
        type: COINS_CHANGED,
        payload: id
    }
}

export const assetChanged = (amount) => {
    return {
        type: ASSETS_CHANGED,
        payload: amount
    }
}

export const coinsSaved = ({ id, amount }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: COINS_SAVED });
        firebase.database().ref(`/portfolios/${currentUser.uid}/`)
            .push({ id, amount })
    }
}
