import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT_COUNT } from "./constant";

const chatSlice =  createSlice({
    name: "chat",
    initialState: {
        messages: []
     },
    reducers :{
        addMessage:(state,action) => {
        // to reduce load on dom . i am resticting messages
        state.messages.splice(OFFSET_LIVE_CHAT_COUNT,1);
    //When you use push(), a new element is simply added to the next available spot at the end. This is a quick operation that doesn't depend on the array's size (O(1) complexity).
    // When you use unshift(), the existing elements must be "shifted" over to make room at the start of the array. This means every single existing element needs its index updated, so the time taken increases with the array's length (O(n) complexity). 
       state.messages.push(action.payload);
        // state.messages.unshift(action.payload);
        }
    }
});

export const { addMessage} = chatSlice.actions;
export default chatSlice.reducer;