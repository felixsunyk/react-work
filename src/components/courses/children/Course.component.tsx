import React from "react";
import { courseInterface } from "../../../models/course/Course.interface";


type Props ={
    testid : string,
    model : courseInterface,
    onCourseSelect : (course : courseInterface) => void
}
export const CourseComponent : React.FC<Props> = (props) => {
    
    const getCssClass = () =>{
        let css ='course'
        if (props.model.selected){
            css  += ' selected'

        }
            return css.trim()
    }

    const handleClick = (course : courseInterface) =>{props.onCourseSelect(course)};

    return(
        
        <li data-testid ={ props.testid || "not-set"} className={getCssClass()}
        onClick={()=> handleClick(props.model)}>
            <div className="selected-indicator">*</div>
            <div className="title">{props.model.title}</div>
        </li>
        
        
    )
}
