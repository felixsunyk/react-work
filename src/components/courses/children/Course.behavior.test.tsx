import { fireEvent, prettyDom, render } from "@testing-library/React";
import { courseInterface } from "src/models/course/Course.interface";
import { CourseComponent } from "./Course.component";
// import { courseInterface } from "src/models/course/Course.interface";


describe('course.component: behavior', () =>{

    it('click event invoken onCourseSelect', () =>{
        const testid ='unit-test-behavior';
        const onCourseSelect = vitest.fn();
        const model: courseInterface
     ={id:1, title:'React', selected:false}
    const {container} = render(<CourseComponent testid={testid} model={model} onCourseSelect={onCourseSelect}/>)
    const courseElement = container.firstChild as  HTMLElement;
    fireEvent.click(courseElement)
})

})