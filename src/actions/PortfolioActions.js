import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    COIN_CHECKED,
    COIN_UNCHECKED,
    COINS_SAVED,
    COINS_FETCHED
} from './types';

export const coinChecked = ({ value }) => {
    return {
        type: COIN_CHECKED,
        payload: value
    };
}

export const coinUnchecked = ({ value }) => {
    return {
        type: COIN_UNCHECKED,
        payload: value
    };
}

export const coinsSaved = () => {
    return (dispatch) => {
        dispatch({ type: COINS_SAVED });
    }
}
export const coinsFetched = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: COINS_FETCHED })

        return (dispatch) => {
            firebase.database().ref(`/portfolios/${currentUser.uid}/checked`)
                .on('value', snapshot => {
                    dispatch({ type: COINS_FETCHED, payload: snapshot.val() });
                });
        }
    }
}