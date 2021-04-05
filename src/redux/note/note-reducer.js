import { noteActionTypes } from './note-types';
import { addNote, deleteNote } from './note.utils';

const INITIAL_STATE = {
    currentNote: null,
    notes: [],
    isFetching: false,
    isSaving: 'Save',
    isUpdating: 'Update',
    isDeleting: 'Delete',
    error: undefined,
}

const noteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case noteActionTypes.SET_USER_NOTE:
            return {
                ...state,
                currentNote: action.payload
            }
        case noteActionTypes.SET_SAVE_STATUS:
            return {
                ...state,
                isSaving: 'Save'
            }
        case noteActionTypes.SET_UPDATE_STATUS:
            return {
                ...state,
                isUpdating: 'Update'
            }
        case noteActionTypes.SET_DELETE_STATUS:
            return {
                ...state,
                isDeleting: 'Delete'
            }
        case noteActionTypes.FETCH_NOTES_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        case noteActionTypes.FETCH_NOTES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                notes: action.payload,
                error: null
            }
        case noteActionTypes.SAVE_NOTE_START:
            return {
                ...state,
                isSaving: 'Saving...',
                error: null,
            }
        case noteActionTypes.SAVE_NOTE_SUCCESS:
            return {
                ...state,
                notes: addNote(state.notes, action.payload),
                isSaving: 'Saved',
                error: null,
            }
        case noteActionTypes.UPDATE_NOTE_START:
            return {
                ...state,
                isUpdating: 'Updating...',
                error: null,
            }
        case noteActionTypes.UPDATE_NOTE_SUCCESS:
            return {
                ...state,
                currentNote: action.payload,
                notes: addNote(state.notes, action.payload),
                isUpdating: 'Done',
                error: null,
            }
        case noteActionTypes.DELETE_NOTE_START:
            return {
                ...state,
                isDeleting: 'Deleting...',
                error: null,
            }
        case noteActionTypes.DELETE_NOTE_SUCCESS:
            return {
                ...state,
                notes: deleteNote(state.notes, action.payload),
                isDeleting: 'Deleted',
                error: null,
            }
        case noteActionTypes.UPDATE_NOTE_FAILURE:
        case noteActionTypes.SAVE_NOTE_FAILURE:
        case noteActionTypes.FETCH_NOTES_FAILURE:
            return {
                ...state,
                isFetching: false,
                isSaving: 'Try again',
                isUpdating: 'Try again',
                isDeleting: 'Try again',
                error: action.payload
            }
        default:
            return state;
    }
}

export default noteReducer;