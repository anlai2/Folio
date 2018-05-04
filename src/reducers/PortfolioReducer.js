import _ from 'lodash';
import {
	COIN_CHECKED,
	COIN_UNCHECKED,
	COINS_SAVED,
	COINS_FETCHED,
	ASSETS_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	checked: [],
	coins: {}
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
			console.log(state);
			// Map array of checked coins to an obj of coins as keys with 0 value
			return {
				...state,
				coins: Object.assign(...state.checked.map(x => ({ [x]: 0 })))
			};
			console.log(state);
		case ASSETS_CHANGED:
			console.log(state);
			return {
				...state,
				coins: { ...state.coins, [action.payload.coin]: action.payload.value }
			}
			console.log(state);
		default:
			return state;
	}
};