"use client";

import { NewCourseForm } from "@/features/courses/components/new-course-form";

const CreatePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-center h-full p-6">
      <div className="h-full pt-32">
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What would you like to call your course? Don&apos;t worry, you can
          change it later.
        </p>
        <NewCourseForm />
      </div>
    </div>
  );
};

export default CreatePage;
