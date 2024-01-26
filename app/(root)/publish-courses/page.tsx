import PublishCourses from '@/components/forms/PublishCourses'
import { getUserByID } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'


const page = async () => {
    const { userId } = auth();
  
    if (!userId) redirect("/sign-in");
  
    const mongoUser = await getUserByID({ userId });
  
    // console.log(mongoUser);
  
    return (
      <div className="">
        <PublishCourses mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    );
  };
  
  export default page;