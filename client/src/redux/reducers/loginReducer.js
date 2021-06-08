const initialState = {
    authToken: null,
    bio: null,
    displayName: null,
    peers: null,
    posts: null,
    profileImage: null,
    sub: null,
    userId: null,


}

const LoginReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case "LoginUser":
            return { ...state, ...payload }
        case "LogOutUser":
            return { ...state, ...payload }
        case "UpdateInfo":
            return { ...state, ...payload }
        default:
            return state

    }


}

export default LoginReducer;