import {
  COIN_CHECKED,
  COIN_UNCHECKED,
  COINS_SAVED,
  ASSETS_CHANGED,
  ASSETS_SAVED,
  PORTFOLIO_FETCH,
} from '../actions/types';

const INITIAL_STATE = {
  checked: [],
  coins: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COIN_CHECKED:
      return {
        checked: [...state.checked, action.payload],
      };
      // this.state.coins.push(action.payload)
    case COIN_UNCHECKED:
      return {
        checked: [
          ...state.checked.slice(0, action.payload),
          ...state.checked.slice(action.payload + 1),
        ],
      };
    case COINS_SAVED:
      // Map array of checked coins to an obj of coins as keys with 0 value
      return {
        ...state,
        coins: Object.assign(...state.checked.map(x => ({ [x]: 0 }))),
      };
    case ASSETS_CHANGED:
      return {
        ...state,
        coins: { ...state.coins, [action.payload.coin]: action.payload.value },
      };
    case ASSETS_SAVED:
      return {
        ...state,
      };
    case PORTFOLIO_FETCH:
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
};
