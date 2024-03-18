import { configureStore } from '@reduxjs/toolkit'
import conocimiento from './slice/conocimiento';
// ...

const store = configureStore({
  reducer: {
    conocimiento:conocimiento
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;