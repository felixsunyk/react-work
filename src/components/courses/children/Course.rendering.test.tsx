import {render, screen, prettyDOM} from "@testing-library/React";
import { courseInterface } from "src/models/course/Course.interface";
import { CourseComponent } from "./Course.component";
import { Children } from "react";


describe('course.component: rendering', () =>{

it('renderd course test correctly', ()=>{
    const testid = 'unit-text-course';
    const model : courseInterface = { id:1, title:'coding',  selected:false,}
    render(<CourseComponent testid={testid} model={model} onCourseSelect = {() =>{}}/>);

    const courseElement = screen.getByTestId(testid);
    expect(courseElement).not.toBeNull();

    const courseChildren = courseElement.children;
    expect(courseChildren).toHaveLength(2);

    expect(courseChildren.item(1)?.innerHTML).toContain('coding')
});

it('renderd a course indicator coreectly', () =>{
    const testid = 'another-unit-test-for-course';
    const model : courseInterface = {id:4, title:"unit test", selected:false};
    render(<CourseComponent testid={testid} model={model} onCourseSelect={()=> {}}/>)

    const courseElement = screen.getByTestId(testid);
    expect (courseElement).not.toBeNull();

    const courseChildren = courseElement.children;
    expect(courseChildren).toHaveLength(2);

    expect(courseChildren.item(0)?.innerHTML).toEqual("*");
});

it('has expected css class when selected is true', ()=>{
    const testid = 'unit-test-css-class';
    const model : courseInterface ={id:3, title:'plytho', selected: true}
    render(<CourseComponent testid = {testid} model={model} onCourseSelect={()=>{}}/>)

    const courseElement = screen.getByTestId(testid);
    expect(courseElement).not.toBeNull();
    expect(courseElement.className).toContain('selected');
})

it('has expected css class when selected is false', ()=>{
    const testid = 'unit-test-css-class';
    const model : courseInterface ={id:3, title:'plytho', selected: false}
    render(<CourseComponent testid = {testid} model={model} onCourseSelect={()=>{}}/>)
    const courseElement = screen.getByTestId(testid);
    expect(courseElement).not.toBeNull();
    expect(courseElement.className).not.toContain('selected');
})
})
