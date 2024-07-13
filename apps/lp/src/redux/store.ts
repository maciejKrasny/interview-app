import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from './slices/category.slice';
import questionReducer from './slices/question.slice';

const store = configureStore({
    reducer: {
        categories: categorySlice.reducer,
        questions: questionReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store;