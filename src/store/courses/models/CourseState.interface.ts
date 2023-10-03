import { courseInterface } from "src/models/course/Course.interface"


export interface CourseStateInterface{
    loading: boolean
    courses: courseInterface[]

}
export * from './CourseState.interface'