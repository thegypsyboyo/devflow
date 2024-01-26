import * as z from 'zod';

/**
 * Define the shape of form using a Zod schema.
 * https://zod.dev/
 *
 */
export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3)
});

export const AnswerSchema = z.object({
  answer: z.string().min(100)
});

export const ProfileSchema = z.object({
  name: z.string().min(5).max(50),
  username: z.string().min(5).max(50),
  bio: z.string().min(10).max(150),
  portfolioWebsite: z.string().url(),
  location: z.string().min(5).max(50)
});

export const CourseSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(20),
  // semesterId: z.string(),
  // instructorId: z.string(),
  picture: z.string().url(), // Assuming the picture is a URL. You can adjust the validation as needed.
});

