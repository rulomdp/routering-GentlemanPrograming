import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";

export const EmptyUserState: UserInfo = {
    id:0,
    name:"",
    email:""
}

export const userSlice = createSlice({
    name: "user",
    initialState: EmptyUserState,
    reducers:{
        createUser: (state,action) => {
            return action.payload
        },
        modifyUser: (state,action) => {
            return {...state, ...action.payload};
        },
        resetUser: () => {
            return EmptyUserState;
        }
    }
});

export const {createUser,modifyUser,resetUser} = userSlice.actions;
export default userSlice.reducer;