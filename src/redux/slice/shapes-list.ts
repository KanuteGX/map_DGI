import { ReactElement } from "react";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface ShapesListState {
    list: ReactElement[]
}

// Define the initial state using that type
const initialState: ShapesListState = {
    list: [],
} as ShapesListState;

export const ShapesListSlice = createSlice({
    name: 'shapesList',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        updateShapesList: (state: ShapesListState, action: PayloadAction<ReactElement>) => {
            state.list = [...state.list, action.payload]
        },
    },
})

export const { updateShapesList } = ShapesListSlice.actions

// Other code such as selectors can use the imported `RootState` typeks
export const userData = (state: RootState) => state.shapesList.list
