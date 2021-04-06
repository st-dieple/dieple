import { combineReducers } from 'redux';
import categoryReducer from '../pages/category/category.reducers';
import cartReducer from '../pages/cart/cart.reducers';
import globalLoadingReducer from '../shared/components/GlobalLoading/globalLoading.reducers';

const rootReducer = combineReducers({
  categories: categoryReducer,
  carts: cartReducer,
  globalLoading: globalLoadingReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
