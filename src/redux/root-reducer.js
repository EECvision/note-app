import { combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import noteReducer from './note/note-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['note','user']
}
const rootReducer = combineReducers({
    user: userReducer,
    note: noteReducer
});

export default persistReducer(persistConfig, rootReducer)