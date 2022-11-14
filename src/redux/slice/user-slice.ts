import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface UserState {
    data: User
}

// Define the initial state using that type
const initialState: UserState = {
    data: {},
} as UserState;

export const UserSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        signIn: (state: UserState, action: PayloadAction<string>) => {
            action.payload
        },
    },
})

export const { signIn } = UserSlice.actions

// Other code such as selectors can use the imported `RootState` typeks
export const userData = (state: RootState) => state.user.data

type User = {
    token?: string;
}