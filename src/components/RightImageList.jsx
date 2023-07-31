import React from "react";
import { benefits } from "../assets";

export default function RightImageList(props) {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center ">
      <div className="p-8 font-semibold">
        <h2 className="text-2xl font-bold mb-4 text-primary-500">
          {props.data.title}
        </h2>
        <p>{props.data.desc}</p>
        <ul className="pt-4">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="text-gray-800">
                <span className="text-primary-500 font-bold text-lg">
                  &#10004; {value.subtitle}
                </span>
                <p>{value.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <img src={benefits} alt="" />
      </div>
    </div>
  );
}
