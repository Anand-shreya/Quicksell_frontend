import { createReducer } from "@reduxjs/toolkit";

export const dataReducer = createReducer({}, {
    LOAD_DATA_INIT: (state) => {
        state.loading = true;
    },
    LOAD_DATA_SUCCESS: (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUsers = action.payload.users; // Changed to allUsers for clarity
    },
    LOAD_DATA_FAILURE: (state) => {
        state.loading = false;
        state.allTickets = [];
        state.allUsers = [];
    },
});

export const filterDataReducer = createReducer({}, {
    FILTER_DATA_INIT: (state) => {
        state.loading = true;
        state.filteredData = []; // Changed selectedData to filteredData
    },
    FILTER_DATA_SUCCESS: (state, action) => {
        state.loading = false;
        state.filteredData = action.payload.resultData; // Changed to resultData
        state.isUser = action.payload.isUser; // Changed user to isUser
    },
    FILTER_DATA_FAILURE: (state, action) => {
        state.loading = false;
        state.filteredData = [];
        state.errorMessage = action.payload.message; // Changed message to errorMessage
    },
});
