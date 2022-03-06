import {configureStore} from "@reduxjs/toolkit"
import toDoReducer from "./toDoSlice"
const store = configureStore({
    reducer:{
        toDo:toDoReducer
    }
}
)
export default store 
export type RootState = ReturnType<typeof store.getState>;