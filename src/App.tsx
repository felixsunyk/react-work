import React,{ useState } from "react";
import { CourseListComponent } from "./components/courses/CourseList.componenet";
import { courseInterface } from "./models/course/Course.interface";
import './App.css'
import { CourseCategoriesInterface } from "./models/course/CourseCategories.interface";
// import { CourseCategoriesListComponent } from "./components/courses/CourseCategoriesList.component";
// import {c}


const CourseCategories: CourseCategoriesInterface[]=[
  {id: 0, title: "software development", selected: false},
 {id:1, title: "Art &media", selected: false},
 {id: 2, title: "Engineering & technology", selected: false},
 {id: 3, title: "sales, marketing & business", selected: false},
 {id: 4, title: "Nothing", selected: false},
]

const COURSES: courseInterface[] = [
  {id:0, title: 'Web Development', category: CourseCategories[0], duration: 24, rating:5, selected: false},
  {id:1, title: 'mobile Development', category: CourseCategories[0], duration: 24, rating:5, selected: false},
  {id:2, title: 'Game Development', category: CourseCategories[0], duration: 24, rating:5, selected: false},
  {id:3, title: 'Automotive technology', category: CourseCategories[2], duration: 24, rating:5, selected: false},
  {id:4, title: 'Digital marketing', category: CourseCategories[3], duration: 24, rating:5, selected: false},
  {id:5, title: 'Eletrical technology', category: CourseCategories[2], duration: 24, rating:5, selected: false},
  {id:6, title: 'customer service', category: CourseCategories[3], duration: 24, rating:5, selected: false},
  {id:7, title: 'Photography', category: CourseCategories[1], duration: 24, rating:5, selected: false},
  {id:8, title: 'Music', category: CourseCategories[1], duration: 24, rating:5, selected: false},
  {id:9, title: 'Painting', category: CourseCategories[1], duration: 24, rating:5, selected: false},
  {id:10, title: 'UI/UX Design', category: CourseCategories[0], duration: 24, rating:5, selected: false},
  {id:11, title: 'Business Development', category: CourseCategories[3], duration: 24, rating:5, selected: false},
  {id:12, title: 'Cloud Engineering', category: CourseCategories[0], duration: 24, rating:5, selected: false},
]

const App =()=>{
  const [courses, setCourses]= useState<courseInterface[]>(COURSES)
  
  const onCourseSelect =(course: courseInterface)=>{
    const updatedCourses = [...courses];
    const selectedCourse= updatedCourses.find(c =>c.id===course.id) as courseInterface;
    selectedCourse.selected = !course.selected;
    setCourses(updatedCourses)
  }
  return(
    <>
      <h1>Course Categories List</h1>
      {/* <CourseCategoriesListComponent CourseCategories={CourseCategories} /> */}
      <h2>Courses List</h2>
      <CourseListComponent courses={courses} onCourseSelect={onCourseSelect} />
    </>
  )
}
export default App;
