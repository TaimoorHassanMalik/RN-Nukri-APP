

export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            console.log('This is Reducer',action)
            return {
                ...state,
                userId: action.userId,
                token: action.token,
                name: action.name
            }
        default:
            return state
    }
}