import { createStore } from 'redux';
import favReducer from '../reducers/favreducer';

const store = createStore(favReducer);

export default store;