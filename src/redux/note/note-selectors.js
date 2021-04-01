import { createSelector } from 'reselect';

const selectNote = state => state.note;

export const selectCurrentNote = createSelector(
    [selectNote],
    note => note.currentNote
)

export const selectNotes = createSelector(
    [selectNote],
    note => note.notes
)

export const selectIsNoteFetching = createSelector(
    [selectNote],
    note => note.isFetching
)

export const selectIsNoteSaving = createSelector(
    [selectNote],
    note => note.isSaving
)

export const selectIsNoteUpdating = createSelector(
    [selectNote],
    note => note.isUpdating
)

export const selectIsNoteDeleting = createSelector(
    [selectNote],
    note => note.isDeleting
)

export const selectError = createSelector(
    [selectNote],
    note => note.error
)

