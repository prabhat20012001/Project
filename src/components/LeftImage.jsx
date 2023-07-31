import React from "react";

export default function LeftImage(props) {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center">
      <img src={props.data.image} alt="" />

      <p className="font-semibold p-8">
        <span className="text-primary-500 font-bold text-xl">
          {props.data.title}
        </span>
        {props.data.desc}
      </p>
    </div>
  );
}
