import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../hooks";
import { ADD_QUESTION, ADD_QUESTION_PARAMS } from "../../api/mutations/addQuestion";
import { apolloClient } from "#//App";

interface InitialState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    currentRequestId?: string;
}

const initialState: InitialState = {
    loading: 'idle'
}

export const createQuestion = createAppAsyncThunk(
    'questions/createQuestion',
    async (params: ADD_QUESTION_PARAMS) => {
        const response = await apolloClient.mutate({
            mutation: ADD_QUESTION, variables: {
                ...params
            }
        });

        return response.data;
    }
)

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(createQuestion.fulfilled, (state, action) => {
            if (
                state.loading === 'pending' &&
                state.currentRequestId === action.meta.requestId
            ) {
                state.loading = 'idle'
                state.currentRequestId = undefined
            }
        })
        builder.addCase(createQuestion.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
                state.currentRequestId = action.meta.requestId
            }
        })
        builder.addCase(createQuestion.rejected, (state, action) => {
            if (
                state.loading === 'pending' &&
                state.currentRequestId === action.meta.requestId
            ) {
                state.loading = 'idle'
                state.currentRequestId = undefined
            }
        })
    },
})

export default questionsSlice.reducer;