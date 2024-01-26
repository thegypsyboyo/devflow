import React from 'react'

interface CourseProps {
  _id: string;
  title: string;
  description: string,
  instructor: {
    _id: string;
    name: string;
    picture: string;
    clerkId: string;
  };
  views: number;
  createdAt: Date;
  clerkId?: string | null;
}


const CoursesCard = ({
  _id,
  clerkId,
  createdAt,
  instructor,
  title,
  views,
  description
}: CourseProps) => {
  console.log("Author", instructor)
  return (
    <div>
      <h2 className="">{title}</h2>
      <p className="">{description}</p>
    </div>
  )
}

export default CoursesCard