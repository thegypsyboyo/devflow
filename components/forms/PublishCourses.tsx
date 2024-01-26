"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CourseSchema } from '@/lib/validations';
import { createCourse } from '@/lib/actions/courses.actions';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

const type: any = "create"

interface Props {
    mongoUserId: string;
  }
const PublishCourses = ({ mongoUserId }: Props) => {
  const router = useRouter(); // use it to navigate
  const pathname = usePathname(); // use it to know where we are
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  // 1. Define your form
  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      title: "",
      description: "",
      picture: "",
    },
  });

   // 2. Define a submit handler.
   async function onSubmit(values: z.infer<typeof CourseSchema>) {
    setIsSubmitting(true);
    try {
      // make an async call to your API -> create a question
      // contain all the form data.
      // navigate to home page to see the question
      await createCourse({
        title: values.title,
        description: values.description,
        instructor: JSON.parse(mongoUserId),
        path: pathname,
        picture: values.picture,
      });

      // navigate to the home page;
      router.push("/courses");
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-10"
    >
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-semibold text-dark400_light800">
              Question Title <span className="text-primary-500">*</span>
            </FormLabel>
            <FormControl className="mt-3.5">
              <Input
                className="no-focus paragraph-regular background-light900_dark300 light-border text-dark300_light700 min-h-[56px] border"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Be specific and imagine you&apos;re asking a question to another
              person
            </FormDescription>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-semibold text-dark400_light800">
              Question Title <span className="text-primary-500">*</span>
            </FormLabel>
            <FormControl className="mt-3.5">
              <Input
                className="no-focus paragraph-regular background-light900_dark300 light-border text-dark300_light700 min-h-[56px] border"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Be specific and imagine you&apos;re asking a question to another
              person
            </FormDescription>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      
        {/* Portfolio website */}
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Portfolio Link{' '}
              </FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="Your portfolio URL"
                  {...field}
                  className="no-focus paragraph-regular light-border-2 background-light800_dark300 text-dark300_light700 min-h-[56px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="primary-gradient w-fit !text-light-900"
      >
        {isSubmitting ? (
          <>{type === "edit" ? "Editing..." : "Posting"}</>
        ) : (
          <>{type === "edit" ? "Edit Question" : "Ask a Question"}</>
        )}
      </Button>
    </form>
  </Form>
  )
}

export default PublishCourses