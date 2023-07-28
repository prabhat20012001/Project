import React from "react";

export default function ActivityBlogs(props) {
  const blog = props.blogs.map((value, index) => {
    return (
      <figure key={index}>
        <div>
          <img
            src={value.thumbnail}
            alt=""
            className="w-full object-cover block"
          />
        </div>
        <figcaption>
          <h4 className="font-bold leading-8 text-[22px] py-2">
            {value.title}
          </h4>
          <p className="pb-2">{value.desc}</p>
          <button className="font-bold text-lg text-primary-400">
            Read More
          </button>
        </figcaption>
      </figure>
    );
  });

  return (
    <section
      className="container mx-auto border-10 border-solid border-transparent p-15 relative"
      style={{ borderImage: "url('border.png') 30 stretch" }}
    >
      <div className="bg-primary-10 px-6 py-12 mb-10 rounded-2xl">
        <h3 className="lg:text-xl xl:text-3xl font-bold text-center mb-10">
          You cannot always control what goes on outside, but you can always
          control what goes on inside.
        </h3>

        <div className="grid lg:grid-cols-3 gap-6">{blog}</div>
      </div>
    </section>
  );
}
