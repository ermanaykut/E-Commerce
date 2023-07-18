import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import productSlice from './slices/productSlice';

const reducers = combineReducers({
  cart: cartSlice,
  product: productSlice,
});

const store = configureStore({
  reducer: reducers,
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;