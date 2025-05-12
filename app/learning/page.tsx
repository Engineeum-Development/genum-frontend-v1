"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenText, LayoutList, Grid3x3 } from "lucide-react";
import Image from "next/image";
import learningpageimage from "/public/assets/images/learningpage-image.png";
import courseimage from "/public/assets/images/courses-image.png";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function LearnPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const router = useRouter();

  useEffect(() => {
    const dummyCourses: Course[] = [
      {
        id: "1",
        title: "Course 1",
        description: "Get Started with Python if you have no coding experience",
        image: "/assets/images/courses-image.png",
      },
      {
        id: "2",
        title: "Course 2",
        description: "Get Started with Python if you have no coding experience",
        image: "/assets/images/courses-image.png",
      },
      {
        id: "3",
        title: "Course 3",
        description: "Get Started with Python if you have no coding experience",
        image: "/assets/images/courses-image.png",
      },
      {
        id: "4",
        title: "Course 4",
        description: "Get Started with Python if you have no coding experience",
        image: "/assets/images/courses-image.png",
      },
      {
        id: "5",
        title: "Course 5",
        description: "Get Started with Python if you have no coding experience",
        image: "/assets/images/courses-image.png",
      },
    ];
    setCourses(dummyCourses);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
        <div className="space-y-4 text-center md:text-left max-w-xl">
          <h1 className="text-3xl font-bold">Learning</h1>
          <p className="text-muted-foreground">
            Contribute, download and work with datasets specific to Africa
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
        <div className="w-full max-w-xs md:max-w-md md:translate-x-10">
          <Image
            src={learningpageimage}
            alt="Learning Illustration"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-20 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpenText className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">Courses</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <LayoutList className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Grid3x3 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-[#202124] font-normal text-base">
          Go from beginner under 6 months! Upskill with our self-paced,
          structured courses designed to be completed in 6 months. Build and
          showcase your own solutions, and boost your confidence in machine
          learning!
        </p>

        <Accordion type="multiple" className="mt-6 w-full">
          {courses.map((course) => (
            <AccordionItem key={course.id} value={course.id}>
              <AccordionTrigger>
                <Link
                  href={`/learning/${course.title}`}
                  className="flex gap-4 items-center text-left cursor-pointer w-full"
                >
                  <Image
                    src={courseimage}
                    alt={course.title}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover w-14 h-14"
                  />
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {course.description}
                    </p>
                  </div>
                </Link>
              </AccordionTrigger>
              <AccordionContent>
                {course.id === "1" ? (
                  <Card>
                    <CardContent className="py-4 space-y-1 text-sm text-muted-foreground">
                      <p>Python Essentials</p>
                      <p>Python for Data Science</p>
                      <p>Setting up and working with IDE</p>
                      <p>Variables and Data Types</p>
                      <p>Control flows and Loop</p>
                      <p>Functions</p>
                      <p>OOP</p>
                      <p>Import functions, packages, making</p>
                      <p>API calls</p>
                      <p>File writing, file reading, error handling</p>
                      <p>Practise</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="py-4">
                      <p className="text-sm text-muted-foreground">
                        Course content preview will appear here.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
