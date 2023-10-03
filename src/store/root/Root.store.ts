import { configureStore } from "@reduxjs/toolkit";
import{ useDispatch } from "react-redux";
import { RootStoreInterface } from "./models";
import { CoursesStoreSlice } from "../courses/Courses.slice";


export const rootStore = configureStore({

    reducer:{
        coursesState: CoursesStoreSlice.reducer
    }  
})

export type RootStateInterface = ReturnType<typeof rootStore.getState>