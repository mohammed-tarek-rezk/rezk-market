import { configureStore , combineReducers} from '@reduxjs/toolkit'
import { productsApi } from './Apis/productsApi'
import favSlice from './slices/favSlice'
import cartSlice from './slices/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
  key: 'cart',
  storage,
}
const reducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  fav: favSlice ,
  cart: cartSlice
})

const persistReducers =persistReducer(persistConfig , reducer)
export const store = configureStore({
  reducer: persistReducers ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export const persistor = persistStore(store);