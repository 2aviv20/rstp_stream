const initialState = {
    login: false
};

const reducer = (state = initialState, action) => {
    if (action.type === 'LOGIN') {
        return {
            login: true
        }
    }
    if (action.type === 'LOGOUT') {
        return {
            login: false
        }
    }
    return state;
};

export default reducer;