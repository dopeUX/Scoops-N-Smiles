import { createSlice } from "@reduxjs/toolkit";
import getUserAuth from './getUserAuth';

interface init {
    value: number,
    authPageState:string,
    checkUserAuth:string,
    loadingPageState:string,
    isLoading:boolean
}

const initialState:init={
   value:0,
   authPageState:'',
   checkUserAuth:getUserAuth(),
   loadingPageState:'hidden',
   isLoading:false,
   //logged in user details,
   //menu items,
   //user cart items 
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
      },
      changeLoadingState:(state,action)=>{
        state.loadingPageState=action.payload
      },
      changeIsLoading:(state, action)=>{
        state.isLoading= action.payload
      },
    }
});


export const {
  changeAuthPageState,
  changeUserAuthState,
  changeLoadingState,
  changeIsLoading
} = AppSlice.actions;
export default AppSlice.reducer;