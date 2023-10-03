import React from "react";
import { courseInterface } from "../../models/course/Course.interface";
import { CourseComponent } from "./children/Course.component";
// import { courseInterface } from "../../models/course/CourseCategories.interface";

type Props = {
    courses: courseInterface[],
    onCourseSelect:(course: courseInterface) => void
};

export const CourseListComponent: React.FC<Props> = (props) => {
    
    const handleClick  =(course: courseInterface)=>{
        props.onCourseSelect(course)
       
    }
    return(<ul>
            {props.courses.map((course, index) => <CourseComponent key={index} model ={course}  onCourseSelect={() => handleClick(course)}   testid = {`course-${course.id}`} ></CourseComponent> 
             )}
           
        </ul>
    );
};