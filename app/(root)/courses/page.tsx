import CoursesCard from '@/components/cards/CoursesCard'
import Filter from '@/components/shared/Filter'
import NoResult from '@/components/shared/NoResult'
import LocalSearchbar from '@/components/shared/search/LocalSearchbar'
import { CourseFilters } from '@/constants/filters'
import { getCourses } from '@/lib/actions/courses.actions'
import React from 'react'


export default async function Courses () {
  const results = await getCourses({})
  // console.log("Results:", results)
  return (
    <div>
        <h1 className="h1-bold text-dark100_light900">Our Featured Courses</h1>
        <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">

        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={CourseFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <div className="">
      { results.courses.length > 0 ? (
          results.courses.map((course) => (
            <CoursesCard
            description={course.description}
            key={course._id}
            _id={course._id}
            title={course.title}
            instructor={course.instructor}
            views={course.views}
            createdAt={course.createdAt}
            />
          ))
        ): (
         <NoResult 
         title='There are no courses to show'
         description=''
         link='/'
         linkTitle='Register a course'
         />
        )}

      </div>
    </div>
  )
}
