import { combineReducers } from 'redux';

import maskReducer from './slices/Mask';
import productReducer from './slices/Product';
import themeReducer from './slices/Theme';

const reducer = combineReducers({
  theme: themeReducer,
  mask: maskReducer,
  product: productReducer,
});

export default reducer;
