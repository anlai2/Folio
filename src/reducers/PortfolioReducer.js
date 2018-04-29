import {
    COINS_CHANGED,
	COINS_SAVED,
	ASSETS_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    coins: [],
    assets: []
}

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case COINS_CHANGED:
			console.log(action.payload)
			console.log("coin changed")
			//this.state.coins.push(action.payload)
			return { ...state };
		case COINS_SAVED:
			return { ...state, coins: action.payload};
		case ASSETS_CHANGED:
			console.log(action.payload)
			console.log("asset changed")
			//this.state.assets.push(action.payload)
			return { ...state};
		default:
			return state;
	}
};