import firebase from 'firebase'; 
import { Actions } from 'react-native-router-flux';
import {
    COINS_CHANGED,
    COINS_SAVED
} from './types';

export const coinChanged = ({ value }) => {
	return {
		type: COINS_CHANGED,
		payload: value
    };
}

export const coinsSaved = ({ coins }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: COINS_SAVED });
        firebase.database().ref(`/portfolios/${currentUser.uid}/`)
            .set({ coins })
    }
}
