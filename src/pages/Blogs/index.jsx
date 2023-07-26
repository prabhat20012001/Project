import React from "react";
import {
  blogHeader1,
  blogHeader2,
  blogRecent,
  blogThumbnail1,
  blogThumbnail2,
  blogThumbnail3,
  blogThumbnail4,
  blogThumbnail5,
  blogThumbnail6,
} from "../../assets";

export default function Blogs() {
  return (
    <>
      <main className="container mx-auto">
        {/* ==========our blogs============= */}
        <div className="bg-primary-50/30 rounded-xl flex items-center">
          <div className="mx-auto">
            <img src={blogHeader1}></img>
          </div>

          <div>
            <h1 className="subheading heading-primary">OUR BLOGS</h1>
            <p>
              Mental health and physical health are linked, with poor mental
              health leading to physical health problems and vice versa. This
              blog post explores the relationship and offers tips for how to
              prioritize both in daily life.
            </p>
          </div>
          <div className="">
            <img src={blogHeader2} className="h-fit"></img>
          </div>
          <button class="cylindrical-button">
            <span class="flex items-center">
              <span class="mr-2">Search</span>
              <span class="text-xl">
                <i class="fas fa-search"></i>
              </span>
            </span>
          </button>
        </div>
        {/* =========Maintain A good habit ======= */}
        <div>
          <div>
            <img></img>
          </div>
          <div>
            <h2>Maintain a good habit with yourself</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget
              magna est.Neque turpis faucibus eget magna est.
            </p>
          </div>
        </div>
        {/* ==============cards============= */}
        <div>
          <div class="container mx-4 my-4">
            <div class="w-64 border">
              <img src={blogThumbnail1} class="w-full" alt="..." />
              <div class="para">
                <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                  Hello World
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, rem.
                </p>
                <a
                  href="#"
                  class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
