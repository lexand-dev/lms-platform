import * as z from "zod";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormField,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required"
  })
});

export const NewCourseForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    }
  });

  const { isValid, isSubmitting } = form.formState;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      const response = axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`);
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. 'Advanced web development'"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                What would you teach in this course?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-x-2">
          <Link href="/">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};
