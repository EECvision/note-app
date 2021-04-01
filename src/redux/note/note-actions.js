import { noteActionTypes } from './note-types';

export const setCurrentNote=(note)=>({
    type: noteActionTypes.SET_USER_NOTE,
    payload: note
});

export const fetchNotesStart = currentUser =>({
    type: noteActionTypes.FETCH_NOTES_START,
    payload: currentUser
})

export const fetChNotesSuccess =notes=>({
    type: noteActionTypes.FETCH_NOTES_SUCCESS,
    payload: notes
})

export const fetchNotesFailure = errorMessage =>({
    type: noteActionTypes.FETCH_NOTES_FAILURE,
    payload: errorMessage
})

export const saveNoteStart = note => ({
    type: noteActionTypes.SAVE_NOTE_START,
    payload: note
})

export const saveNoteSuccess = note => ({
    type: noteActionTypes.SAVE_NOTE_SUCCESS,
    payload: note
})

export const saveNoteFailure = error => ({
    type: noteActionTypes.SAVE_NOTE_FAILURE,
    payload: error
})

export const updateNoteStart = note => ({
    type: noteActionTypes.UPDATE_NOTE_START,
    payload: note
})

export const updateNoteSuccess = note => ({
    type: noteActionTypes.UPDATE_NOTE_SUCCESS,
    payload: note
})

export const updateNoteFailure = error => ({
    type: noteActionTypes.UPDATE_NOTE_FAILURE,
    payload: error
})

export const deleteNoteStart = note => ({
    type: noteActionTypes.DELETE_NOTE_START,
    payload: note
})

export const deleteNoteSuccess = note => ({
    type: noteActionTypes.DELETE_NOTE_SUCCESS,
    payload: note
})

export const deleteNoteFailure = error => ({
    type: noteActionTypes.DELETE_NOTE_FAILURE,
    payload: error
})

export const updateSaveStatus = () => ({
    type: noteActionTypes.SET_SAVE_STATUS
})

export const updateUpdateStatus = () => ({
    type: noteActionTypes.SET_UPDATE_STATUS
})

export const updateDeleteStatus = () => ({
    type: noteActionTypes.SET_DELETE_STATUS
})

// export const fetchNotesStartAsync =(currentUser)=>{
//     return dispatch=>{
//             const noteRef = firestore.collection('users').doc(currentUser.id).collection('notes');
//             dispatch(fetchNotesStart())

//             noteRef.get().then( querySnapshot => {
//                 const noteMap = convertNoteSnapshotToMap(querySnapshot)
//                 dispatch(fetChNotesSuccess(noteMap))
//             }).catch(error => dispatch(fetchNotesFailure(error.message)))
//     }
// }


