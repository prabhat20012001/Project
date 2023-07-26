import React from "react";

import { meditationThumbnail } from "../assets";

export default function ActivityVideos() {
  return (
    <>
      <section className="container mx-auto bg-gradient-to-b from-primary-10 to-transparent py-10 rounded-t-3xl">
        <h2 className="subheading heading-primary text-center mb-10">
          Latest Videos & Blogs
        </h2>

        <div className="mb-12">
          <img src={meditationThumbnail} alt="" className="w-fit mx-auto" />
        </div>
      </section>
    </>
  );
}
