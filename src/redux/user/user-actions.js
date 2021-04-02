import userActionType from './user-types';

export const googleSignInStart =()=> ({
    type: userActionType.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = emailAndPassword => ({
    type: userActionType.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const signInSuccess = user => ({
    type: userActionType.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: userActionType.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userActionType.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: userActionType.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionType.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: userActionType.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = userCredentials => ({
    type: userActionType.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = user => ({
    type: userActionType.SIGN_UP_SUCCESS,
    payload: user
})

export const signUpFailure = error => ({
    type: userActionType.SIGN_UP_FAILURE,
    payload: error
})

export const verifyUserStart = () => ({
    type: userActionType.VERIFY_USER_START,
})

export const verifyUserSuccess = () => ({
    type: userActionType.VERFIY_USER_SUCCESS,
})

export const verifyUserFailure = error => ({
    type: userActionType.VERIFY_USER_FAILURE,
    payload: error
})

export const setVerificatonMessage = () => ({
    type: userActionType.SET_VERIFICATION_MESSAGE,
    payload: false
})

export const resetError = () => ({
    type: userActionType.RESET_ERROR,
})