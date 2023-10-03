import { CourseCategoriesInterface } from "./CourseCategories.interface";

export interface courseInterface {
    id: number;
    title: string;
    duration?: number;
    category?: CourseCategoriesInterface;
    selected?: boolean;
    rating?: number;
}