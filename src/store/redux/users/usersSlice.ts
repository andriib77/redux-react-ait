import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"

import { UsersSliceState, UserData } from "./types"

const usersSliceInitialState: UsersSliceState = {
  users: [],
}

export const usersSlice = createAppSlice({
  name: "USERS",
  initialState: usersSliceInitialState,
  reducers: create => ({
    addUser: create.reducer(
      (state: UsersSliceState, action: PayloadAction<UserData>) => {
        console.log(action.payload)
        state.users = [...state.users, action.payload]
      },
    ),
    resetResults: create.reducer(
      (state: UsersSliceState) => usersSliceInitialState,
    ),
    deleteUser: create.reducer(
      (state: UsersSliceState, action: PayloadAction<string>) => {
        state.users = state.users.filter(user => user.id !== action.payload)
      },
    ),
  }),

  selectors: {
    users: (state: UsersSliceState) => state.users,
  },
})

export const userSliceActions = usersSlice.actions
export const userSliceSelectors = usersSlice.selectors
