import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    isLoggedIn: false, // Add the isLoggedIn field to track login status
    isSiggnedIn: false, // Add the isLoggedIn field to track login status
};

const userSlice = createSlice({
    name: "userDetail",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            const { name, email } = action.payload;
            state.name = name;
            state.email = email;
        },
        setLoginStatus: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setSigninStatus: (state, action) => {
            state.isSiggnedIn = action.payload;
        },
    },
});

export const { setUserDetails, setLoginStatus,setSigninStatus } = userSlice.actions;
export default userSlice.reducer;
