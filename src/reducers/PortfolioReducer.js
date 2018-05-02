import _ from 'lodash';
import {
	COIN_CHECKED,
	COIN_UNCHECKED,
	COINS_SAVED
} from '../actions/types';

const INITIAL_STATE = {
	checked: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case COIN_CHECKED:
			console.log(...state.checked);
			return {
				checked: [...state.checked, action.payload]
			}
			console.log(...state.checked);
		//this.state.coins.push(action.payload)
		case COIN_UNCHECKED:
			console.log(...state.checked);
			return {
				checked: [
					...state.checked.slice(0, action.payload),
					...state.checked.slice(action.payload + 1)
				]
			}
			console.log(...state.checked);
		case COINS_SAVED:
			return { ...state };
		default:
			return state;
	}
};