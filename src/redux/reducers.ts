import { combineReducers } from 'redux';

import themeReducer from './slices/Theme';

const reducer = combineReducers({ theme: themeReducer });

export default reducer;
