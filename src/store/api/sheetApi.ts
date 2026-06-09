import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type SheetRow = {
  floor: string
  unit: string
  total_area: string
}

export const sheetApi = createApi({
  reducerPath: "sheetApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getSheet: builder.query<SheetRow[], void>({
      query: () => "/sheet",
    }),
  }),
})

export const { useGetSheetQuery } = sheetApi