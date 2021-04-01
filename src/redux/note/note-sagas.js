import { takeLatest, call, put, all } from 'redux-saga/effects';
import { noteActionTypes } from './note-types';
import { firestore, convertNoteSnapshotToMap, auth } from '../../firebase/firebase.utils';
import {
    fetChNotesSuccess,
    fetchNotesFailure,
    saveNoteFailure,
    saveNoteSuccess,
    updateNoteFailure,
    updateNoteSuccess,
    deleteNoteSuccess,
    deleteNoteFailure
} from './note-actions';

export function* fetchNotes({ payload: { id } }) {
    try {
        const noteRef = firestore.collection('users').doc(id).collection('notes');
        const snapshot = yield noteRef.get();
        const noteMap = yield call(convertNoteSnapshotToMap, snapshot);
        yield put(fetChNotesSuccess(noteMap));

    } catch (error) {
        yield put(fetchNotesFailure(error.message))
    }
}

export function* saveNote({ payload: {title, body}}) {
    try {
        const noteRef = firestore.collection('users').doc(auth.currentUser.uid).collection('notes').doc();
        const snapShot = yield noteRef.get();
        const id = snapShot.id
        const currentDate = new Date()
        const createdAt = {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth(),
            date: currentDate.getDate(),
            hour: currentDate.getHours(),
            minute: currentDate.getMinutes()
        };
        yield noteRef.set({ id, title, body, createdAt });
        yield put(saveNoteSuccess({id, title, body, createdAt}))
    } catch (error) {
        yield put(saveNoteFailure(error.message))
    }
}

export function* updateNote({ payload: {title, body, id} }) {
    const noteRef = firestore.collection('users').doc(auth.currentUser.uid).collection('notes').doc(id);
    try {
        const snapShot = yield noteRef.get();
        const id = snapShot.id
        const currentDate = new Date()
        const createdAt = {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth(),
            date: currentDate.getDate(),
            hour: currentDate.getHours(),
            minute: currentDate.getMinutes()
        };
        yield noteRef.set({ id, title, body, createdAt });
        yield put(updateNoteSuccess({id, title, body, createdAt}))
    } catch (error) {
        yield put(updateNoteFailure(error.message))
    }
}

export function* deleteNote({ payload } ) {
    const noteRef = firestore.collection("users").doc(auth.currentUser.uid).collection("notes").doc(payload)
    try {
        yield noteRef.delete()
        yield put(deleteNoteSuccess(payload))
    } catch (error) {
        yield put(deleteNoteFailure(error.message));
    }
}

export function* fetchNotesStart() {
    yield takeLatest(noteActionTypes.FETCH_NOTES_START, fetchNotes)
}

export function* saveNoteStart() {
    yield takeLatest(noteActionTypes.SAVE_NOTE_START, saveNote)
}

export function* updateNoteStart() {
    yield takeLatest(noteActionTypes.UPDATE_NOTE_START, updateNote)
}

export function* deleteNoteStart() {
    yield takeLatest(noteActionTypes.DELETE_NOTE_START, deleteNote)
}

export function* noteSaga() {
    yield all([
        call(fetchNotesStart),
        call(saveNoteStart),
        call(updateNoteStart),
        call(deleteNoteStart)
    ])
}

// import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { noteActionTypes } from './note-types';
// import { firestore,convertNoteSnapshotToMap} from '../../firebase/firebase.utils';
// import {
//     fetChNotesSuccess, 
//     fetchNotesFailure
// } from './note-actions';

// export function* fetchNotesAsync({payload: {id}}){
//     try {
//         const noteRef = firestore.collection('users').doc(id).collection('notes');
//         const snapshot = yield noteRef.get();
//         const noteMap = yield call(convertNoteSnapshotToMap, snapshot);
//         yield put(fetChNotesSuccess(noteMap));
    
//     } catch (error) {
//         yield put(fetchNotesFailure(error.message))
//     }    
// }

// export function* fetchNotesStart(){
//     yield takeLatest(noteActionTypes.FETCH_NOTES_START, fetchNotesAsync )
// }


// export function* noteSaga() {
//     yield all([
//         call(fetchNotesStart)
//     ])
// }
