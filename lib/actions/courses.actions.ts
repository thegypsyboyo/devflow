"use server"
// Import necessary modules and models
import { connectToDatabase } from './../mongoose';
import Course from '@/database/courses.models';
// import Semester from '@/database/semester.models';
// import User from '@/database/user.model';
import { CreateCourseParams } from './shared.types';
import User from '@/database/user.model';


export async function getCourses(params:any) {
  try {
      connectToDatabase();

      const courses = await Course.find({})
          .populate({ 
            path: 'instructor',
            model: User 
          })
          .sort({ createdAt: -1 })

      return { courses };
  } catch (error) {
      console.log(error);
      throw (error);
  }
}


export async function createCourse(params:CreateCourseParams) {
  try {
    // Establish the database connection
    connectToDatabase();

    // Extract parameters from the input
    const { title, description, instructor, picture } = params;

    // Create the course
    const course = await Course.create({
      title,
      description,
      picture,
      instructor,
    });

    return course; // Optionally, you can return the created course
  } catch (error) {
    console.error('Error creating course:', error);
    throw new Error('Error creating course'); // Optionally, you can handle errors as needed
  }
}
