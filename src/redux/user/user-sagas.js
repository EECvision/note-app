import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionType from './user-types';
import { auth, googleProvider, getCurrentUser, createUserProfileDocument } from '../../firebase/firebase.utils';
import { 
    signInSuccess, 
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure,
    verifyUserSuccess,
    verifyUserFailure
} from './user-actions';


export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        if(auth.currentUser.emailVerified){
            yield put(
                signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()})
            )
        }else{
            yield put(signInFailure('please verify your email and try again'))
        }
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* signInWithEmail({payload}){
    const {email, password, displayName} =  payload;
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth({...user, displayName});
    } catch (error) {
        yield put(
            signInFailure(error.message)
        )
    }
}

export function* signUp({payload: {displayName, email, password}}){
    try {
        yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ email, password, displayName}))
    } catch (error) {
        yield put(signUpFailure(error.message))
    }
}

export function* verifyUser(){
    try {
        yield auth.currentUser.sendEmailVerification();
        yield put(verifyUserSuccess())
    } catch (error) {
        yield put(verifyUserFailure(error.message))
    }
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error.message))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
         yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionType.GOOGLE_SIGN_IN_START,signInWithGoogle )
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionType.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onSignUpStart(){
    yield takeLatest(userActionType.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionType.SIGN_UP_SUCCESS, verifyUser)
}

export function* onSignOutStart(){
    yield takeLatest(userActionType.SIGN_OUT_START, signOut )
}

export function* onCheckUserSession(){
    yield takeLatest(userActionType.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),        
        call(isUserAuthenticated)
    ])
}