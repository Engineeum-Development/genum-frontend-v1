"use client";

import Image from "next/image";
import { Book, Database, MessageSquare, ShieldCheck, GraduationCap, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import  learnLogo  from "@/public/assets/images/learn-icon.png";
import userrankingLogo from "@/public/assets/images/userranking-icon.png";
import { Input } from "@/components/ui/input";


export default function HomePage() {
  return (
    <main className="px-5 md:px-10 py-10 space-y-20">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row justify-between gap-5">
        <div className="space-y-2">
          <h2 className="text-4xl font-semibold">Welcome Sarah!</h2>
          <p className="text-sm text-muted-foreground max-w-md text-black">
            Genum is the place for you to build the best AI solutions to transform lives.
          </p>
        </div>
        <div className="flex gap-8 text-xs">
          <div>
            <p className="text-muted-foreground">LOGIN STREAK</p>
            <p className="text-xl font-semibold text-center">1</p>
            <p className="text-muted-foreground text-center">day</p><br></br>
            <p className="text-muted-foreground text-center">New Record!</p>
          </div>
          <div>
  <p className="text-muted-foreground">TIER PROGRESS</p>
  <div className="flex items-center gap-1 mt-1 text-center">
    <Image
      src="/assets/images/Tier-icon.png" 
      alt="Tier Icon"
      width={40}
      height={40}
      className="rounded-full"
    />
   
  </div><br></br>
  <p className="text-muted-foreground font-semibold text-center">Contributor</p>
</div>

          <div>
            <p className="text-muted-foreground">PUBLIC ACTIVITY</p>
            <p className="text-xl font-semibold text-center">0</p>
            <p className="text-muted-foreground text-center">activity</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full flex justify-between flex-wrap gap-6 text-center px-2 sm:px-4 md:px-10">
  {[
    { icon: <Database />, label: "Datasets", count: 1 },
    { icon: <ShieldCheck />, label: "Models", count: 0 },
    { icon: <Book />, label: "Challenges", count: 0 },
    { icon: <MessageSquare />, label: "Discussion", count: 0 },
    { icon: <GraduationCap />, label: "Courses", count: 0 },
  ].map((item) => (
    <div
      key={item.label}
      className="flex flex-col items-center space-y-1 text-sm flex-1 min-w-[120px] max-w-[180px]"
    >
      <div className="text-muted-foreground text-lg">{item.icon}</div>
      <p>{item.label}</p>
      <p className="text-lg font-semibold">{item.count}</p>
      <p className="text-muted-foreground text-xs">total created</p>
    </div>
  ))}
</section>


      {/* Suggested Data Section */}
      <section>
        <h3 className="text-3xl font-semibold mb-4">Let’s get you Started</h3>
        <p className="text-sm text-muted-foreground max-w-md text-black">
            Help us make relevant suggestions for you:
          </p>
          <br></br>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            {
              title: "Construction Materials Data",
              desc: "Lorem ipsum dolor sit amet consectetur...",
              img: "/assets/images/first homepage image.png",
            },
            {
              title: "Health Care Data",
              desc: "Find various data about healthcare in Africa.",
              img: "/assets/images/second homepage image.png",
            },
            {
              title: "Health Care Data",
              desc: "Find various data about healthcare in Africa.",
              img: "/assets/images/second homepage image.png",
            },
            {
              title: "Startup Funding Data",
              desc: "Lorem ipsum dolor sit amet consectetur...",
              img: "/assets/images/third homepage image.png",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="min-w-[250px] rounded-md border shadow-sm p-3 bg-white"
            >
              <Image
                src={item.img}
                alt="suggested-img"
                width={250}
                height={150}
                className="rounded-md"
              />
              <h4 className="text-md font-semibold mt-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="flex flex-col md:flex-row justify-between gap-6 items-start">
        <div>
          <h3 className="text-4xl font-semibold leading-snug">
            Become confident in building <br /> Africa’s next AI solutions,enroll <br/>for our learning program now 
          </h3>
          <p className="text-muted-foreground mt-2 max-w-md">
            Explore courses on ML solutions, participate and collaborate with other ML models to solve problems
          </p>
          <div className="flex gap-5 mt-6 text-center text-sm">
            <div>
              <p className="text-xl font-bold">5</p>
              <p>Courses</p>
            </div>
            <div>
              <p className="text-xl font-bold">25</p>
              <p>Modules</p>
            </div>
            <div>
              <p className="text-xl font-bold">1</p>
              <p>Capstone Project</p>
            </div>
          </div>
        </div>
        <Image src="/assets/images/forth homepage image.png" alt="courses-img" width={600} height={400} />
      </section>

      {/* Learn Section */}
      <section>
        
         <h3 className="text-2xl font-semibold mb-3"><Image
                  src={learnLogo}
                  alt="learn-icon"
                  className="size-[40px] inline-block"
                />   Learn</h3>
        <p className="text-sm mb-4 text-muted-foreground">800+ already enrolled</p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            {
              title: "Python Essentials",
              desc: "Build and scale AI solutions",
              img: "/assets/images/fifth homepage image.png",
            },
            {
              title: "Python for Data Analysis",
              desc: "Exploratory data analysis",
              img: "/assets/images/sixth homepage image .png" ,
            },
            {
              title: "Intro to Machine Learning",
              desc: "Scale AI across Africa",
              img: "/assets/images/seventh homepage image.png",
            },
          ].map((course) => (
            <div
              key={course.title}
              className="min-w-[250px] border p-3 rounded-md shadow-sm"
            >
              <Image
                src={course.img}
                alt="course-img"
                width={250}
                height={150}
                className="rounded-md"
              />
              <h4 className="mt-2 font-semibold">{course.title}</h4>
              <p className="text-sm text-muted-foreground">{course.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Ranking Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4"><Image
                  src={userrankingLogo}
                  alt="userranking-icon"
                  className="size-[40px] inline-block"
                /> User Ranking</h3>
        <p/>Discover our most active community members<p/><br></br>
        <div className="grid md:grid-cols-4 gap-4 ">
          {[
            {
              title: "Datasets Contributor",
              desc: "Celebrate the continent’s largest data contributor",
              color: "bg-blue-600",
            },
            {
              title: "Top Challenger",
              desc: "Celebrate our biggest challengers and problem-solvers",
              color: "bg-yellow-400",
            },
            {
              title: "Capstone Project",
              desc: "Showcasing genum students' top projects transforming Africa with real-world,impactful problem-solving solutions",
              color: "bg-purple-600",
            },
            {
              title: "Nationality",
              desc: "Find the most active Nationality from our community",
              color: "bg-red-500",
            },
          ].map((item) => (
            <div key={item.title} className="border p-4 rounded-md">
              <div className={`w-4 h-4 rounded-full ${item.color} mb-2`} />
              <h4 className="font-semibold text-xl">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div>
          <h3 className="text-4xl font-semibold mb-2">African Data Science<br/> Community</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Join a vibrant community of Data Science enthusiasts across Africa.
          </p>
          <div className="flex items-center gap-2 mt-4">
  <Input
    type="email"
    placeholder="Enter E-mail"
    className="text-xs px-3 py-2 border border-[#ccc] w-full max-w-xs"
  />
  <Button className="bg-[#4393F4] text-white text-xs rounded-md px-6 py-2">
    Subscribe
  </Button>
</div>

        </div>
        <Image
          src="/assets/images/eight homepage image.png"
          alt="community-img"
          width={380}
          height={280}
          className="rounded-md"
        />
      </section>
    </main>
  );
}
