import { createSlice } from "@reduxjs/toolkit";
import getUserAuth from './getUserAuth';

interface init {
    value: number,
    authPageState:string,
    checkUserAuth:string
}

const initialState:init={
   value:0,
   authPageState:'',
   checkUserAuth:getUserAuth()
}

export const AppSlice = createSlice({
    name:'initial',
    initialState,
    reducers:{
      changeAuthPageState:(state, action)=>{
         state.authPageState = action.payload 
      },
      changeUserAuthState:(state,action)=>{
        state.checkUserAuth=action.payload
      }
    }
});


export const {changeAuthPageState,
changeUserAuthState
} = AppSlice.actions;
export default AppSlice.reducer;