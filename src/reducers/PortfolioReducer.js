import {
    COINS_CHANGED,
	COINS_SAVED
} from '../actions/types';

const INITIAL_STATE = {
    coins: []
}

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case COINS_CHANGED:
			console.log(action.payload)
			console.log(state.coins)
			return { 
				coins: [...state.coins, action.payload]
			 }
			//this.state.coins.push(action.payload)
		case COINS_SAVED:
			return { ...state, coins: action.payload};
		default:
			return state;
	}
};