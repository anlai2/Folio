import firebase from 'firebase'; 
import { Actions } from 'react-native-router-flux';
import {
    COIN_CHECKED,
    COIN_UNCHECKED,
    COINS_SAVED
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

export const coinsSaved = ({ checked }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: COINS_SAVED });
        firebase.database().ref(`/portfolios/${currentUser.uid}/`)
            .set({ checked })
    }
}
