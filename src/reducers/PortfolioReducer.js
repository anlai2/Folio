import {
    COIN_CHANGED,
    COINS_SAVED
} from '../actions/types';

const INITIAL_STATE = {
    coins: [],
    assets: []
}

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case COIN_CHANGED:
			return { ...state, coins: action.payload };
		case COINS_SAVED:
			return { ...state, coins: action.payload};
		default:
			return state;
	}
};