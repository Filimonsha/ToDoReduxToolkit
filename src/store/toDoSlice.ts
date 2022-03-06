import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name:"magicIsHere",
    initialState:{
        data:[{
            name:"Дело 1",
            isDone:false,
            id:0
        }],
    },
    reducers:{
        addToDoItem:(state,action)=>{
            state.data.push(
                {name:action.payload.name,
                isDone:false,
                id: Math.floor(Math.random()*1000)
                }
            )
            
        },
        changeItemIsDone:(state,action)=>{
            console.log(action.payload.id)
            const indeedElement = state.data.find(
              (item) => item.id === action.payload.id
            )
            if(indeedElement) {console.log("ssss")
            indeedElement.isDone = !indeedElement?.isDone}
        }
    }
})

const {actions,reducer} = toDoSlice
export const {addToDoItem,changeItemIsDone} = actions
export default reducer
