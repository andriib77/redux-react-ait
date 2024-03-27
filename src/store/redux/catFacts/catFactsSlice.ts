import { v4 } from "uuid"
import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import { RandomCatFactState, CatFactResponse } from "./types"

const randomCatFactsInitialState: RandomCatFactState = {
  data: [],
  status: "default",
  error: undefined,
}

export const catFactsSlice = createAppSlice({
  name: "CATSFACTS",
  initialState: randomCatFactsInitialState,
  reducers: create => ({
    getFact: create.asyncThunk(
      async (arg: any, { rejectWithValue }) => {
        // arg - данные которые вы передаете из вашего компонента, в эту функцию
        // Например: данные, которые вы хотите отправить на сервер
        // console.log(arg)
        const response = await fetch("https://catfact.ninja/fact")
        const result = response.json()

        if (!response.ok) {
          // Данные переходят в rejected, если response.ok === false
          rejectWithValue(result)
        } else {
          // Данные переходят в fulfilled, если response.ok === true
          return result
        }
      },
      {
        pending: (state: RandomCatFactState) => {
          console.log("Pending")
          state.error = undefined
          state.status = "loading"
        },
        fulfilled: (
          state: RandomCatFactState,
          action: PayloadAction<CatFactResponse>,
        ) => {
          console.log("Fulfilled", action)
          state.status = "success"
          state.data = [
            ...state.data,
            {
              fact: action.payload?.fact,
              id: v4(),
            },
          ]
        },
        rejected: (state: RandomCatFactState, action: PayloadAction<any>) => {
          console.log("Rejected", action.payload)
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
    deleteAllFacts: create.reducer(
      (state: RandomCatFactState) => randomCatFactsInitialState,
    ),
    deleteFact: create.reducer(
      (state: RandomCatFactState, action: PayloadAction<string>) => {
        state.data = state.data.filter(data => data.id !== action.payload)
      },
    ),
  }),
  selectors: {
    fact: (state: RandomCatFactState) => state,
  },
})

export const randomCatFactSliceActions = catFactsSlice.actions
export const randomCatFactSliceSelectors = catFactsSlice.selectors
