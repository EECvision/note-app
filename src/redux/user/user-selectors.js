import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

export const selectReload = createSelector(
    [selectUser],
    user => user.reload
)

export const selectError = createSelector(
    [selectUser],
    user => user.error
)

export const selectSendMessage = createSelector(
    [selectUser],
    user => user.sendMessage
)

export const selectNewUser = createSelector(
    [selectUser],
    user => user.newUser
)