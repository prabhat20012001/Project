import React from "react";
import {
  internshipHeader,
  internshipIcon1,
  internshipIcon2,
  internshipIcon3,
  internshipIcon4,
  internshipIcon5,
  internshipTestimonial,
  internshipWhy,
  iconCommitment,
  iconFacilities,
  iconExperience,
} from "../../assets";

export default function Index() {
  return (
    <>
      <main className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Text items on the left */}
          <div className="md:w-1/2 text-center md:text-left px-4 space-y-2">
            <h1 className="subheading heading-primary">
              Looking for an Internship.
            </h1>
            <h3 className="font-bold text-3xl">Want to join us ?</h3>
            <p className="para py-4 pb-6">
              We are seeking passionate individuals who are willing to make a
              change and contribute to our noble cause. Are you someone who has
              the zest to combine your passion for mental health with real life?
              If yes, look no further! Join Wleness to embark on a rewarding
              journey promoting well-being and supporting individuals in need.
            </p>
            <button className="btn-one !text-lg ">Apply Now</button>
          </div>

          {/* Image on the right */}
          <div className="md:w-1/2">
            <img src={internshipHeader} alt="header" />
          </div>
        </div>

        {/* ==== why wleness===== */}
        <section className="container mx-auto pb-7 pt-10 lg:pt-12 overflow-x-hidden">
          <div>
            <hgroup className="items-center lg:text-center">
              <h2 className="subheading heading-primary text-center ">
                Why Wleness?
              </h2>
            </hgroup>
          </div>
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="order-2 box-border p-4 lg:p-10 sm:mx-auto sm:w-4/5 lg:order-1 2xl:w-[45%]">
              <img src={internshipWhy} alt="" />
            </div>
            <article className="order-1 mx-auto sm:w-[580px] lg:order-2 2xl:w-[55%] pb-10">
              <div className="space-y-3 lg:ml-12">
                <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                  <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                    <img
                      src={iconExperience}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                    <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                      Whether you're looking to assist therapists, conducting
                      research or supporting community outreach programs, enjoy
                      customized diverse learning opportunities
                    </p>
                  </figcaption>
                </figure>
                <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                  <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                    <img
                      src={iconCommitment}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                    <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                      Our supportive and collaborative environment ensures
                      you'll receive quality guidance and mentorship from
                      experienced professionals dedicated to your growth.
                    </p>
                  </figcaption>
                </figure>
                <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                  <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                    <img
                      src={iconFacilities}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                    <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                      Experience holistic growth by working in a multi
                      disciplinary team with a positive work-life balance.
                      There's a place for you wherever you excel.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </article>
          </div>
        </section>

        {/* Want to know what is like to work at WLENESS */}
        <div>
          <h1 className="subheading heading-primary ">
            Want to know what it's like to work at WLENESS
          </h1>
          <div className="grid mt-4 grid-cols-5 items-center gap-4">
            {/* Icon-1 */}
            <div className="h-74 items-center p-2 shadow-2xl h-full rounded-xl">
              <img
                src={internshipIcon1}
                alt="Icon 1"
                className="mx-auto py-4"
              />
              <h3 className="text-primary-400 font-bold">
                Kill deadlines, not your mental health:
              </h3>
              <p className="font-semibold">
                Flexible timings for your Flexible creativity
              </p>
            </div>

            {/* Icon-2 */}
            <div className="h-74 items-center p-2 shadow-2xl h-full rounded-xl">
              <img
                src={internshipIcon2}
                alt="Icon 2"
                className="mx-auto py-4"
              />
              <h3 className="text-primary-400 font-bold">
                The perfect work-life balance:
              </h3>
              <p className="para">
                We work as a family where your priority matters to us.
              </p>
            </div>

            {/* Icon-3 */}
            <div className="h-74 items-center p-2 shadow-2xl h-full rounded-xl">
              <img src={internshipIcon3} alt="Icon 3" className="mx-auto" />
              <h3 className="text-primary-400 font-bold">
                We spread smiles, not stress:
              </h3>
              <p className="para">
                Unleash a perfect state of mind sans anxiety or stress
              </p>
            </div>

            {/* Icon-4 */}
            <div className="h-74 items-center p-2 shadow-2xl h-full rounded-xl">
              <img
                src={internshipIcon4}
                alt="Icon 4"
                className="mx-auto py-5"
              />
              <h3 className="text-primary-400 font-bold">
                Break mental health barriers:
              </h3>
              <p className="para">
                Well-being rules with wit, passion, and positive vibes!
              </p>
            </div>

            {/* Icon-5 */}
            <div className="h-74 items-center p-2 shadow-2xl h-full rounded-xl">
              <img src={internshipIcon5} alt="Icon 5" className="mx-auto" />
              <h3 className="text-primary-400 font-bold">
                The perfect Work-Life balance:
              </h3>
              <p className="para">
                Conquer the stigma, spread love and compassion.
              </p>
            </div>
          </div>

          {/* Listen to their stories. */}
          <div className="container  mx-auto py-6 ">
            <h1 className="subheading heading-primary py-4 text-center">
              Listen to their stories.
            </h1>
            <div className="flex items-center py-6 ">
              <div className="w-2/5 ">
                <img
                  src={internshipTestimonial}
                  className="w-full h-96 object-contain"
                />
              </div>

              <div className="w-3/5  pr-0">
                <h3 className="text-teal-400 font-bold text-2xl">
                  Leena Paxton
                </h3>
                <h4>UI/UX Designer</h4>
                <p className="para py-10">
                  “Wleness provided an exceptional internship experience that
                  exceeded my expectations. The supportive team, meaningful
                  projects, and commitment to personal development made it a
                  transformative journey for my career growth. Highly recommend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
