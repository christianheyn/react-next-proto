const ACTIONS = {
    VALIDATE_EMAIL: 'VALIDATE_EMAIL',
};

const reducer = (state, action) => {
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

const initialState = {
    showLoginButton: false,
    errorMsg: null,
}












describe('loginReducer', () => {
    describe('VALIDATE_EMAIL', () => {
        it('aaa', () => {
            const testState = {
                showLoginButton: false,
                errorMsg: null,
            }

            const testEmail = 'aaa'
            const actual = reducer(testState, { type: ACTIONS.VALIDATE_EMAIL, payload: testEmail });
            const expected = false;
            expect(actual.showLoginButton).toEqual(expected);
        });

        it('test@maxmustermann.com', () => {
            const testState = {
                showLoginButton: false,
                errorMsg: null,
            }

            const testEmail = 'test@maxmustermann.com'
            const actual = reducer(testState, { type: ACTIONS.VALIDATE_EMAIL, payload: testEmail });
            const expected = true;
            expect(actual.showLoginButton).toEqual(expected);
        });
        it('test@@maxmustermann.com', () => {
            const testState = {
                showLoginButton: false,
                errorMsg: null,
            }

            const testEmail = 'test@@maxmustermann.com'
            const actual = reducer(testState, { type: ACTIONS.VALIDATE_EMAIL, payload: testEmail });
            const expected = false;
            expect(actual.showLoginButton).toEqual(expected);
        });
    });
});
