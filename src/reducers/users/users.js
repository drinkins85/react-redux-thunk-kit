const initialState = {
    isLoading: false,
    users: [],
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case 'GET_USERS_START':
            return {
                ...state,
                isLoading: true,
            };
        case 'GET_USERS_SUCCESS': {
            return {
                isLoading: false,
                users: action.data,
            }
        }
        case 'GET_USERS_FAIL': {
            return {
                isLoading: false,
                users: [],
            }
        }
        default:
            return state;
    }
}