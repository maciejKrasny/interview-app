import { GET_CATEGORIES, GET_CATEGORIES_DATA } from '#//api/queries/getCategories';
import { apolloClient } from '#//App';
import { Category } from '#//models/Category';
import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../hooks';
import { GET_CATEGORIES_WITH_QUESTIONS, GET_CATEGORIES_WITH_QUESTIONS_DATA } from '#//api/queries/getCategoriesWithQuestions';
import { UPDATE_LEARNING_STATUS, UPDATE_LEARNING_STATUS_DATA, UPDATE_LEARNING_STATUS_PARAMS } from '#//api/mutations/updateLearningStatus';

export interface CategorySliceState {
    category?: Category;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    categories: Omit<Category, 'questions'>[];
    currentRequestId?: string;
}

const initialState: CategorySliceState = {
    loading: 'idle',
    categories: [],
    currentRequestId: undefined,
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            if (
                state.loading === 'pending' &&
                state.currentRequestId === action.meta.requestId
            ) {
                state.loading = 'idle'
                state.categories = action.payload
                state.currentRequestId = undefined
            }
        })

        builder.addCase(fetchCategories.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
                state.currentRequestId = action.meta.requestId
            }
        })

        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            if (
                state.loading === 'pending' &&
                state.currentRequestId === action.meta.requestId
            ) {
                state.loading = 'idle'
                state.category = action.payload
                state.currentRequestId = undefined
            }
        })

        builder.addCase(fetchCategory.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
                state.currentRequestId = action.meta.requestId
            }
        })

        builder.addCase(updateLearningStatusQuestion.fulfilled, (state, action) => {
            if (state.category) {

                const questionIndex = state.category.questions.findIndex((question) => question.id === action.payload?.id)

                state.category.questions[questionIndex].learningStatus = action.payload?.learningStatus || state.category.questions[questionIndex].learningStatus;
            }
        })
    },
})

export const fetchCategories = createAppAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await apolloClient.query<GET_CATEGORIES_DATA>({ query: GET_CATEGORIES });
        return response.data.categories;
    },
)

export const fetchCategory = createAppAsyncThunk(
    'categories/fetchCategory',
    async ({ id, status }: { id: string, status?: string }) => {
        const response = await apolloClient.query<GET_CATEGORIES_WITH_QUESTIONS_DATA>({
            query: GET_CATEGORIES_WITH_QUESTIONS,
            variables: {
                id,
                learningStatus: status
            },
            fetchPolicy: 'no-cache',
        });

        return response.data.category;
    },
)

export const updateLearningStatusQuestion = createAppAsyncThunk(
    'categories/updateLearningStatus',
    async (params: UPDATE_LEARNING_STATUS_PARAMS) => {

        const response = await apolloClient.mutate<UPDATE_LEARNING_STATUS_DATA>({
            mutation: UPDATE_LEARNING_STATUS, variables: {
                ...params
            }
        });

        return response.data?.updateLearningStatus;
    }
)

