import { ReactElement } from "react";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface EditingShapeState {
    editingShape: ReactElement | undefined
}

// Define the initial state using that type
const initialState: EditingShapeState = {
    editingShape: undefined,
} as EditingShapeState;

export const EditingShapeSlice = createSlice({
    name: 'editingShape',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setEditingShape: (state: EditingShapeState, action: PayloadAction<ReactElement | undefined>) => {
            state.editingShape = action.payload
        },
    },
})

export const { setEditingShape } = EditingShapeSlice.actions

// Other code such as selectors can use the imported `RootState` typeks
export const userData = (state: RootState) => state.editingShape.editingShape