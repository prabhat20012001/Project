import React from "react";
import { meditationIcon1, meditationIcon2, meditationIcon3 } from "../assets";

export default function ActivityHeader(props) {
  return (
    <>
      <header className="container mx-auto flex flex-col items-center rounded-3xl py-2 lg:py-6 lg:flex-row 2xl:justify-between 2xl:pt-6 2xl:pb-10 relative">
        <div className="lg:order-2 xl:w-[45%] 2xl:flex 2xl:justify-end mb-6 lg:mb-0">
          {/* Desktop Image */}
          <img src={props.image} alt="" className="w-full object-cover" />
        </div>
        <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 xl:w-[55%] xl:pl-0 -m-5 lg:m-0 p-5 rounded-3xl lg:rounded-none">
          <hgroup className="md:mb-3">
            <h1 className="subheading mb-4 text-center lg:text-left lg:leading-[4rem]">
              {props.title.map((value, index) => {
                return (
                  <span
                    key={index}
                    className={value.color ? "heading-primary" : ""}
                  >
                    {value.text}
                  </span>
                );
              })}
            </h1>
            <h5 className="text-2xl font-semibold mb-8">
              {props.desc.map((value, index) => {
                return (
                  <span
                    key={index}
                    className={value.color ? "heading-primary" : ""}
                  >
                    {value.text}
                  </span>
                );
              })}
            </h5>
          </hgroup>
          <button className="btn-one">Explore More</button>
        </div>

        {/* BreadCrump */}
        {/* <p className="absolute top-5 left-5 font-semibold text-lg">
          <span>Activities / </span>
          <span className="text-primary-400">Meditation</span>
        </p> */}
      </header>

      <section className="container mx-auto bg-primary-10 px-6 py-8 grid grid-cols-3 text-center rounded-2xl">
        <div>
          <img
            src={meditationIcon1}
            alt="Icon 2"
            className="w-16 h-16 object-contain mx-auto"
          />
          <h4 className="font-bold text-lg">Available Exercises</h4>
        </div>
        <div>
          <img
            src={meditationIcon2}
            alt="Icon 2"
            className="w-16 h-16 object-contain mx-auto"
          />
          <h4 className="font-bold text-lg">Flexible Schedule</h4>
        </div>
        <div>
          <img
            src={meditationIcon3}
            alt="Icon 2"
            className="w-16 h-16 object-contain mx-auto"
          />
          <h4 className="font-bold text-lg">Proper Demonstration</h4>
        </div>
      </section>
    </>
  );
}
