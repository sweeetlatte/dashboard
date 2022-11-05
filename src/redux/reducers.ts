import { combineReducers } from 'redux';

import maskReducer from './slices/Mask';
import themeReducer from './slices/Theme';

const reducer = combineReducers({ theme: themeReducer, mask: maskReducer });

export default reducer;
