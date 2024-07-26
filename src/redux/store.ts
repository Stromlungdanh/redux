import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlide'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


// Này chỉ để gợi ý code----------------
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Này chỉ để gợi ý code----------------