import { configureStore } from "@reduxjs/toolkit"
import { sheetApi } from "./api/sheetApi"

export const store = configureStore({
  reducer: {
    [sheetApi.reducerPath]: sheetApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sheetApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch