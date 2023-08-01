import React from "react";
import { precautions } from "../assets";

export default function LeftImageList(props) {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center">
      <div>
        <img src={precautions} alt="" />
      </div>
      <div>
        <div className="p-8 font-semibold">
          <h2 className="text-2xl font-bold mb-4 text-primary-500">
            Precautions:
          </h2>
          <p className="pt-3">{props.data.desc}</p>
          <ul className=" pt-4">
            {props.data.list.map((value, index) => {
              return (
                <li key={index} className="text-gray-800">
                  <span className="text-primary-500 font-bold text-lg mr-1">
                    &#10004;
                  </span>
                  <span>{value}</span>
                </li>
              );
            })}
          </ul>
          <p className="text-gray-800 font-semibold mt-4 pt-4">
            {props.data.info}
          </p>
        </div>
      </div>
    </div>
  );
}
