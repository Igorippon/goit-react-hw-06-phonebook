import { createSlice } from "@reduxjs/toolkit";

// const initialState = '';

// export const filterName = createAction('filter/filterName');

// export const filterReducer = createReducer(initialState, builder =>
//     builder
//         .addCase(filterName, (state, action) => { return state = action.payload; })
// );

const slice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterName(state, action) { return state = action.payload; },
    },
});

export const { filterName } = slice.actions;
export const filterReducer = slice.reducer;
