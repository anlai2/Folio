import {
    COIN_CHECKED,
	COINS_SAVED
} from '../actions/types';

const INITIAL_STATE = {
	checked: [] 
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case COIN_CHECKED:
			return { 
				checked: [...state.checked, action.payload]
			 }
			 console.log(checked);
			//this.state.coins.push(action.payload)
		case COINS_SAVED:
			return { ...state };
		default:
			return state;
	}
};