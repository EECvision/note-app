import userActionType from './user-types';

const INITIAL_STATE = {
    currentUser: null,
    newUser: null,
    error: null,
    sendMessage: false,
    isLoading: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionType.EMAIL_SIGN_IN_START:
        case userActionType.GOOGLE_SIGN_IN_START:
        case userActionType.SIGN_UP_START:
            return {
                ...state,
                isLoading: true
            }
        case userActionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                isLoading: false
            }
        case userActionType.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case userActionType.SIGN_UP_SUCCESS:
            return {
                ...state,
                newUser: action.payload,
                error: null,
                isLoading: false
            }
        case userActionType.VERFIY_USER_SUCCESS:
            return {
                ...state,
                sendMessage: true,
                error: null
            }
        case userActionType.SET_VERIFICATION_MESSAGE:
            return {
                ...state,
                sendMessage: action.payload,
                error: null
            }
        case userActionType.SIGN_IN_FAILURE:
        case userActionType.SIGN_OUT_FAILURE:
        case userActionType.SIGN_UP_FAILURE:
        case userActionType.VERIFY_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                sendMessage: false,
                isLoading: false
            }
        case userActionType.RESET_ERROR:
            return {
                ...state,
                error: null,
                isLoading: false
            }
        default:
            return state;
    }
}

export default userReducer;