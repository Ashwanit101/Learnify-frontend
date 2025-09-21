import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import HighlightText from "../components/core/Homepage/HighlightText";
import CTAButton from "../components/core/Homepage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/Homepage/CodeBlocks";
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection";
import TimelineSection from "../components/core/Homepage/TimelineSection";
import InstructureSection from "../components/core/Homepage/InstructureSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/Homepage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden text-white bg-gradient-to-b from-pink-800 via-pink-900 to-pink-800">
      
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto max-w-maxContent">
        
        <Link to="/signup">
          <div className="mx-auto font-bold text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 hover:shadow-2xl w-fit">
            <div className="flex flex-row items-center gap-2 px-4 py-2 mt-5 rounded-full">
              <button className="text-sm sm:text-base">Become an Instructor</button>
              <FaLongArrowAltRight className="text-lg sm:text-xl" />
            </div>
          </div>
        </Link>

        <div className="mt-6 text-3xl font-semibold leading-snug text-center sm:text-4xl md:text-5xl">
          Empower your Future With <HighlightText text={"Coding Skills"} />
        </div>

        <div className="w-full max-w-3xl px-6 mt-4 text-base text-center text-pink-200 sm:text-lg sm:px-12 md:px-20">
          With our online coding courses, you can learn at your own pace, from anywhere in the world and get access to hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        <div className="flex flex-col gap-6 mt-8 sm:flex-row sm:gap-12">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book A Demo
          </CTAButton>
        </div>

        {/* Video */}
        <div className="flex justify-center w-full mt-10 mb-12 shadow-xl shadow-pink-700/40 rounded-xl">
          <video
            muted
            loop
            autoPlay
            controls
            className="w-full border border-pink-600 shadow-2xl sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-xl"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}
        <div className="w-full mb-12">
          <CodeBlocks
            position="lg:flex-row"
            heading={
              <div className="text-3xl font-semibold leading-snug sm:text-4xl">
                Unlock Your <HighlightText text="Coding Potential" /> With Our Coding Courses
              </div>
            }
            subheading="You can ace anything with our online courses and achieve your desired results."
            ctabtn1={{ btntext: "Try it Yourself", linkto: "/signup", active: true }}
            ctabtn2={{ btntext: "Learn More", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Simple HTML Template</title>\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Website</h1>\n  </header>\n  <main>\n    <section>\n      <h2>About</h2>\n      <p>This is a simple HTML template.</p>\n    </section>\n    <footer>\n      <h2>Contact</h2>\n      <p>Email: example@example.com</p>`}
            codeColor="text-yellow-400"
            className="p-6 text-pink-100 bg-pink-900 shadow-lg rounded-xl"
          />
        </div>

        {/* Code Section 2 */}
        <div className="flex flex-col w-full mt-12 lg:flex-row-reverse">
          <CodeBlocks
            position="lg:flex-row-reverse"
            heading={
              <div className="text-3xl font-semibold leading-snug sm:text-4xl">
                Unlock Your <HighlightText text="Coding Potential" /> With Our Coding Courses
              </div>
            }
            subheading="You can ace anything with our online courses and achieve your desired results."
            ctabtn1={{ btntext: "Try it Yourself", linkto: "/signup", active: true }}
            ctabtn2={{ btntext: "Learn More", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Simple HTML Template</title>\n</head>\n<body>\n  <header>\n    <h1>Welcome to My Website</h1>\n  </header>\n  <main>\n    <section>\n      <h2>About</h2>\n      <p>This is a simple HTML template.</p>\n    </section>\n    <footer>\n      <h2>Contact</h2>\n      <p>Email: example@example.com</p>`}
            codeColor="text-yellow-400"
            className="p-6 text-pink-100 bg-pink-900 shadow-lg rounded-xl"
          />
        </div>
      </div>

      <ExploreMore />

      {/* Section 2 */}
      <div className="p-12 mt-16 text-white bg-pink-700 bg-opacity-50 shadow-lg rounded-xl">
        <div className="homepage_bg h-[220px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-11/12 gap-6 mx-auto max-w-maxContent">
            <div className="flex flex-row gap-6 text-white sm:gap-12">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Catalog
                  <FaLongArrowAltRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Learn More
                  <FaLongArrowAltRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-11/12 gap-10 py-12 mx-auto max-w-maxContent">
          <div className="flex flex-col items-center w-full gap-10 md:flex-row">
            <div className="text-3xl font-semibold leading-snug sm:text-4xl md:w-1/2">
              Get The Skills You Need for a <HighlightText text={"Job that is in Demand"} />
            </div>
            <div className="flex flex-col gap-4 text-center md:w-1/2 md:text-left">
              <div className="text-sm leading-relaxed text-pink-200 sm:text-base">
                “Our EdTech platform leverages cutting-edge technology to create engaging, personalized learning experiences. We provide a wide range of digital tools."
              </div>
              <div>
                <CTAButton active={true} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center justify-between w-11/12 py-16 mx-auto mt-16 bg-pink-900 shadow-lg max-w-maxContent rounded-xl">
        <InstructureSection />
        <h2 className="mt-12 text-3xl font-semibold text-center text-white sm:text-4xl">
          Reviews from Other Learners
        </h2>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
