import React from "react";
import { meditationTypes } from "../../data";
import {
  meditationHeader,
  meditationIcon1,
  meditationIcon2,
  meditationIcon3,
  meditationThumbnail,
} from "../../assets";

export default function Meditation() {
  return (
    <>
      <header className="container mx-auto flex flex-col items-center rounded-3xl py-2 lg:py-6 lg:flex-row 2xl:justify-between 2xl:pt-6 2xl:pb-10 relative">
        <div className="lg:order-2 xl:w-[45%] 2xl:flex 2xl:justify-end mb-6 lg:mb-0">
          {/* Desktop Image */}
          <img src={meditationHeader} alt="" className="w-full object-cover" />
        </div>
        <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 xl:w-[55%] xl:pl-0 -m-5 lg:m-0 p-5 rounded-3xl lg:rounded-none">
          <hgroup className="md:mb-3">
            <h1 className="subheading mb-4 text-center lg:text-left lg:leading-[4rem]">
              <span className="heading-primary">Meditation </span>
              <span className="text-[#383838]">heals the mind</span>
            </h1>
            <h5 className="text-2xl font-semibold mb-8">
              Step into the
              <span className="heading-primary"> nirvana of self care </span>
              from within with meditation
            </h5>
          </hgroup>
          <button className="btn-one">Explore More</button>
        </div>

        {/* BreadCrump */}
        <p className="absolute top-5 left-5 font-semibold text-lg">
          <span>Activities / </span>
          <span className="text-primary-400">Meditation</span>
        </p>
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

      {/* Techniques */}
      <section className="container mx-auto pb-6">
        <div className="lg:my-14 text-center">
          <h2 className="subheading text-primary-400">MEDITATION TECHNIQUES</h2>
          <p className="lg:text-2xl font-semibold">
            Join us in this journey with our world-class meditation gurus and
            experts just for you at your fingertips.
          </p>
        </div>

        {/* Meditations */}
        <div className="grid lg:grid-cols-3 pb-4 gap-6">
          {meditationTypes.map((value) => {
            return (
              <figure>
                <div>
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full object-cover block"
                  />
                </div>
                <figcaption>
                  <h4 className="font-semibold text-[22px] text-primary-400 py-2">
                    {value.title}
                  </h4>
                  <p className="pb-2 text-justify">{value.desc}</p>
                  <button className="font-bold text-lg text-primary-400">
                    Read More
                  </button>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto bg-gradient-to-b from-primary-10 to-transparent py-10">
        <h2 className="subheading heading-primary text-center mb-10">
          Latest Videos & Blogs
        </h2>

        <div>
          <img src={meditationThumbnail} alt="" className="w-fit mx-auto" />
        </div>
      </section>
    </>
  );
}
