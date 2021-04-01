import { call, all } from 'redux-saga/effects';

import { noteSaga } from './note/note-sagas';
import { userSagas } from './user/user-sagas';

export default function* rootSaga() {
    yield all([
        call(noteSaga),
        call(userSagas)
    ])
}

