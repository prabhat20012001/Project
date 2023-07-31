import React from "react";
import { benefits, precautions, adhvmukhaSteps } from "../assets";

export default function LeftVideoList(props) {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center ">
      <div>
        <iframe
          width="500"
          height="300"
          src={props.data.videoUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="rounded-2xl"
        ></iframe>
      </div>
      <div className="p-8 font-semibold">
        <h2 className="text-2xl font-bold mb-4 text-primary-500">
          {props.data.title}
        </h2>
        <p>{props.data.desc}</p>
        <ul className="list-disc pt-4 list-inside">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary-500 font-bold">
                  &#10004; {value.subtitle}
                </span>
                <p>{value.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
