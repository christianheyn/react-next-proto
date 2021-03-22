export const ACTIONS = {
    VALIDATE_EMAIL: 'VALIDATE_EMAIL',
};

export const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.VALIDATE_EMAIL:
            if (action.payload.match(/([a-z]@{1}[a-z])/)) {
                return {
                    ...state,
                    showLoginButton: true,
                }
            }
            return {
                ...state,
                showLoginButton: false,
            }

        default: return state;
    }
};

export const initialState = {
    showLoginButton: false,
    errorMsg: null,
}


