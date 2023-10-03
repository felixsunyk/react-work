import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { CourseStateInterface } from "./models/CourseState.interface";
import { courseInterface } from "src/models/course/Course.interface";


const initialCourseState: CourseStateInterface = {
    loading: false,
    courses: [],
}

export const CoursesStoreSlice = createSlice ({
    name : 'CourseStoreSlice',
    initialState: initialCourseState,
    reducers:{
        setLoading:(state, action: PayloadAction <boolean>)=> {
            state.loading = action.payload
        },
        setcourses:(state, action: PayloadAction <courseInterface[]> ) => {
            state.courses = action.payload || [];
            state.loading = false;
        },

        setselectedCourse:(state, action: PayloadAction <courseInterface>) =>{
            const Course = action.payload;
            const findselectedCourse = state.courses.find(c=>c.id===Course.id) as courseInterface;
            findselectedCourse.selected = !findselectedCourse.selected


        }


    }
    



})