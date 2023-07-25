import React from "react";
import {
  doctor1,
  faceIcon,
  expertsHeader,
  expertsHeaderMobile,
  featureIcon1,
  featureIcon2,
  featureIcon3,
  expertsWhy1,
  expertsWhy2,
  expertsWhy3,
  patient1,
} from "../../assets";

function Experts() {
  return (
    <>
      {/* ========== Header Bar ========== */}
      <header className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:py-6 lg:flex-row 2xl:justify-between 2xl:pt-14 2xl:pb-10">
        <div className="lg:order-2 xl:w-[45%] 2xl:flex 2xl:justify-end mb-6 lg:mb-0">
          <h3 className="text-xl font-bold heading-primary py-4 lg:hidden flex items-center justify-center lg:justify-start">
            <span className="mr-2"> Mental Health Matters</span>
            <img src={faceIcon} alt="Header Icon" className="w-10" />
          </h3>
          {/* Desktop Image */}
          <img
            src={expertsHeader}
            alt=""
            className="w-full object-cover hidden lg:block scale-[1.1] xl:scale-[1.3]"
          />
          {/* Mobile Image */}
          <img
            src={expertsHeaderMobile}
            alt=""
            className="w-full object-cover lg:hidden"
          />
        </div>
        <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 xl:w-[55%] xl:pl-4 -m-5 lg:m-0 p-5 rounded-3xl lg:rounded-none">
          <hgroup className="md:mb-3">
            <h3 className="text-xl hidden lg:flex font-bold heading-primary items-center justify-center lg:justify-start">
              <span className="mr-2"> Mental Health Matters</span>
              <img src={faceIcon} alt="Header Icon" className="w-10" />
            </h3>
            <h1 className="subheading mb-4 lg:mb-10 text-center lg:text-left lg:leading-[4rem]">
              <span className="text-[#383838] lg:block">Unlock your</span>
              <span className="heading-primary">well being </span>
              <span className="text-[#383838]">with </span>
              <span className="heading-primary">wleness</span>
            </h1>
          </hgroup>
          <div className="lg:flex lg:space-x-3 space-y-3 lg:space-y-0">
            <button className="btn-one !w-full border-2 border-primary-400 lg:!w-fit lg:px-6">
              Make an appointment
            </button>
            <button className="btn-one !bg-transparent border-2 !text-[#383838] !w-full !border-primary-300 lg:!w-fit">
              Explore More
            </button>
          </div>
        </div>
      </header>
      {/* ========== Soul Healers ========== */}
      <section className="container mx-auto mb-5 relative">
        <div className="pb-6 sm:pt-6 lg:pb-14 2xl:py-14">
          <h2 className="subheading text-[1.8rem] sm:pb-0 text-center text-[#383838] lg:mb-4">
            Our <span className="heading-primary">Soul Healers</span> Team
          </h2>
          <p className="para text-center">
            Our team of specialized doctors is committed to providing
            personalized and comprehensive care to our patients. With a passion
            for the latest medical advancements, we deliver high-quality
            treatment in a warm and welcoming environment.
          </p>
        </div>
        {/* Doctors */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8 lg:mb-12">
          <div className="w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-75">
            <img
              src={doctor1}
              alt="Doctors"
              className="w-full block object-cover p-1 box-border"
            />
          </div>
          <div className="w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-95">
            <img
              src={doctor1}
              alt="Doctors"
              className="w-full block object-cover p-1 box-border"
            />
          </div>
          <div className="lg:w-fit w-4/5 mx-auto rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300">
            <img
              src={doctor1}
              alt="Doctors"
              className="w-full block object-cover p-1 box-border"
            />
          </div>
          <div className="w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-95">
            <img
              src={doctor1}
              alt="Doctors"
              className="w-full block object-cover p-1 box-border"
            />
          </div>
          <div className="w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-75">
            <img
              src={doctor1}
              alt="Doctors"
              className="w-full block object-cover p-1 box-border"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="pb-6 lg:pb-10">
          <div className="flex justify-between items-center">
            <button className="lg:w-12 lg:h-12 w-8 h-8 border-2 border-primary-300 rounded-full mr-6 flex justify-center items-center absolute top-[55%] left-4 -translate-y-[55%] lg:-translate-y-0 lg:static">
              <i className="fa-solid fa-caret-left text-primary-300 text-2xl lg:text-4xl" />
            </button>
            <button className="btn-one mx-auto">Book Now</button>
            <button className="bg-primary-300 lg:w-12 lg:h-12 w-8 h-8 rounded-full flex justify-center items-center absolute top-[55%] right-4 -translate-y-[55%] lg:-translate-y-0 lg:static">
              <i className="fa-solid fa-caret-right text-white text-2xl lg:text-4xl" />
            </button>
          </div>
        </div>
      </section>
      {/* ========== Objectives ========== */}
      <section className="container mx-auto grid lg:grid-cols-3 items-center gap-5 bg-primary-50/30 rounded-2xl mt-5 mb-10">
        <figure className="flex items-center px-5 pt-5 lg:py-10">
          <div className="w-3/12 lg:w-20 mr-3">
            <img src={featureIcon1} alt="" className="w-full object-cover" />
          </div>
          <figcaption className="w-3/4 lg:w-fit text-lg text-[#464646]">
            Get the best and assured service.
          </figcaption>
        </figure>
        <figure className="flex items-center px-5 pt-5 lg:py-10">
          <div className="w-3/12 lg:w-20 mr-3">
            <img src={featureIcon2} alt="" className="w-full object-cover" />
          </div>
          <figcaption className="w-3/4 lg:w-fit text-lg text-[#464646]">
            Have a good mental health at a price of pizza.
          </figcaption>
        </figure>
        <figure className="flex items-center px-5 py-5 lg:py-10">
          <div className="w-3/12 lg:w-20 mr-3">
            <img src={featureIcon3} alt="" className="w-full object-cover" />
          </div>
          <figcaption className="w-3/4 lg:w-fit text-lg text-[#464646]">
            24X7 Quality service
          </figcaption>
        </figure>
      </section>
      {/* ========== Why Us ========== */}
      <section className="container mx-auto lg:pb-14 lg:!px-0 px-5">
        <div className="mb-16 from-primary-50/30 to-transparent rounded-t-2xl bg-gradient-to-b pt-10">
          <h1 className="subheading text-center mb-2">
            Why <span className="heading-primary">Wleness</span>
          </h1>
          <p className="text-[#383838] font-medium text-center lg:px-24">
            Discover the power of personalized mental health care with our
            dedicated team of experts committed to helping you achieve your
            goals and improve your well-being.
          </p>
        </div>
        {/* Our Services */}
        <div>
          <figure className="lg:flex items-center mb-12 lg:mb-2">
            <div className="lg:w-[45%] lg:mr-14 mb-5">
              <img
                src={expertsWhy1}
                alt="Therapy"
                className="w-full object-cover"
              />
            </div>
            <figcaption className="lg:w-[55%]">
              <h3 className="text-4xl font-bold text-primary-400 mb-3">
                Therapy
              </h3>
              <p className="text-justify mb-5 font-medium">
                A holistic approach to therapy that considers the whole person –
                mind, body, and spirit. Our therapeutic services are tailored to
                meet the individual needs of each client, ensuring personalized
                and effective care.
              </p>
              <p className="text-right">
                <a
                  href="#"
                  className="font-bold text-primary-300 hover:text-primary-500 transition-all underline underline-offset-4"
                >
                  Get Started
                </a>
              </p>
            </figcaption>
          </figure>
          <figure className="flex flex-col lg:flex-row items-center mb-12 lg:mb-2">
            <figcaption className="order-2 lg:order-1 lg:w-[55%]">
              <h3 className="text-4xl font-bold text-primary-400 mb-3">
                Psychiatrist
              </h3>
              <p className="text-justify mb-5 font-medium">
                A psychiatry is grounded in the principles of empathy,
                compassion, and evidence-based practice. Our psychiatrists
                employ a holistic view of mental health, considering biological,
                psychological, and social factors that may impact an
                individual's well-being.
              </p>
              <p className="text-right">
                <a
                  href="#"
                  className="font-bold text-primary-300 hover:text-primary-500 transition-all underline underline-offset-4"
                >
                  Get Started
                </a>
              </p>
            </figcaption>
            <div className="order-1 lg:order-2 lg:w-[45%] lg:ml-14 mb-5">
              <img
                src={expertsWhy2}
                alt="Therapy"
                className="w-full object-cover"
              />
            </div>
          </figure>
          <figure className="lg:flex items-center mb-12 lg:mb-2">
            <div className="lg:w-[45%] lg:mr-14 mb-5">
              <img
                src={expertsWhy3}
                alt="Therapy"
                className="w-full object-cover"
              />
            </div>
            <figcaption className="lg:w-[55%]">
              <h3 className="text-4xl font-bold text-primary-400 mb-3">
                Couple Therapy
              </h3>
              <p className="text-justify mb-5 font-medium">
                we believe that every couple is unique, and their therapy should
                reflect that. Our couple therapy approach is tailored to meet
                the specific needs and dynamics of each relationship.
              </p>
              <p className="text-right">
                <a
                  href="#"
                  className="font-bold text-primary-300 hover:text-primary-500 transition-all underline underline-offset-4"
                >
                  Get Started
                </a>
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* ========== Appoinment ========== */}
      <section className="container mx-auto bg-primary-50/30 rounded-2xl p-8 lg:p-14 mb-2">
        <h2 className="subheading text-center mb-2">
          Book an <span className="heading-primary">appointment</span> now
        </h2>
        <p className="font-medium text-justify lg:text-lg mb-6">
          We are excited to embark on this wellness journey with you and are
          committed to providing you with the highest quality of care and
          support. Your health and well-being are our top priorities, and we
          look forward to assisting you in achieving your therapeutic goals.
        </p>
        <div className="text-center">
          <button className="btn-one">Make an appointment</button>
        </div>
      </section>
      {/* ========== Special Patients ========== */}
      <section className="container mx-auto py-6 lg:py-10">
        <h2 className="subheading text-center">
          Our special <span className="heading-primary">patients</span> say
        </h2>
        <div className="py-2 lg:py-4">
          <div className="container mx-auto relative lg:!pr-0 pb-4 lg:pb-0">
            {/* Testimonials */}
            <figure className="lg:flex items-center">
              <div className="lg:w-2/5 p-4 flex justify-center items-center">
                <img src={patient1} alt="" className="object-cover w-60" />
              </div>
              <figcaption className="lg:w-3/5">
                <h4 className="text-2xl text-primary-300 text-center lg:text-left font-bold lg:text-3xl 2xl:text-4xl">
                  Mr. Prabhat Kumar
                </h4>
                <h6 className="font-medium text-slate-400 2xl:text-xl mb-4 text-center lg:text-left">
                  Full Stack Developer
                </h6>
                <p className="mb-1 sm:text-lg md:text-base 2xl:text-xl md:leading-5 text-justify lg:pr-8">
                  “I've been to a few different places before, nothing compares
                  to this. this is a best place for lifecare hospital”
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="flex space-x-1 w-fit mx-auto">
            <span className="w-3 h-3 block rounded-full bg-slate-500" />
            <span className="w-3 h-3 block rounded-full bg-primary-300" />
            <span className="w-3 h-3 block rounded-full bg-slate-500" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Experts;
