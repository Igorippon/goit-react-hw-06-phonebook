


export const filterReducer = (state = "", action) => {
    switch (action.type) {
        case 'filter/filterName':
            return action.payload;
        default:
            return state;
    };
};

export const filterName = value => {
    return {
        type: 'filter/filterName',
        payload: value,
    };
};