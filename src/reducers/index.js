const initState = {
    user: null,
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return {
                ...state,
                user: action.payload
            }
        }
    }
};

export default rootReducer;