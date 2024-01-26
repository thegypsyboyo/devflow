// import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
// import CourseMetric from '../shared/CourseMetric';
import Image from 'next/image';

interface CourseProps {
  _id: string;
  title: string;
  description: string,
  picture: string,
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
  description,
  picture
}: CourseProps) => {
  // console.log("Author", instructor)
  // const showActionButtons = clerkId && clerkId === instructor.clerkId;

  return (
    <div className='card-wrapper my-3 flex w-full flex-wrap rounded-[10px] md:my-0 md:w-1/2 md:px-2'>

      <div className="flex w-full flex-wrap">
        <div className="">
        <Image
          alt='main-image'
          src={picture}
          width={400}
          height={400}
          className={`rounded-lg object-cover`}
        />
        <div className="mt-7">
          <h2 className="h3-bold text-dark100_light900">{title}</h2>
          <p className="body-medium text-dark500_light700 mt-4">{description}</p>

          <div className="my-2.5 mb-7 flex items-center">
            <div className="mr-2.5 ">
              <Link href={"/profile"}>
                <Image 
                  src={instructor.picture}
                  alt='instructor'
                  width={30}
                  height={30}
                  className='rounded-full object-contain'
                />
              </Link>
            </div>
            <div className='body-medium text-dark500_light700 flex items-center'>
              By 
              <p className="body-medium text-dark500_light700 ml-1">{instructor.name} <span className="ml-1 font-semibold">in Education</span></p>
            </div>

          </div>
          <Link
            href={"/register"}
            className="primary-gradient w-fit rounded-sm px-3.5 py-2.5 !text-light-900"
          >
           Register now
          </Link>
        </div>
        </div>
      </div>
      {/* <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>

          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        <div className="flex-between mt-6 w-full flex-wrap gap-3">

        <CourseMetric
          imgUrl={picture}
          alt="user"
          value={instructor?.name}
          title={`- asked ${getTimestamp(createdAt)}`}
          href={`/profile/${instructor?.clerkId}`}
          isIntructor
          textStyle="body-medium text-dark400_light700"
        />

        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <CourseMetric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatAndDivideNumber(views)}
            title="Views"
            textStyle="small-medium text-dark400_light800"
          />
        </div>
      </div> */}
    </div>
  )
}

export default CoursesCard