import { configureStore } from '@reduxjs/toolkit';
import { dataReducer, filterDataReducer } from './DataAnalysis/dataReducer'; // Changed variable names

const store = configureStore({
    reducer: {
        dataReducer,filterDataReducer
    }
});

export default store;
