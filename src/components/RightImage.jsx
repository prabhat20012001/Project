import React from "react";

export default function RightImage(props) {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center">
      <p className="p-8 font-semibold">
        <span className="text-primary-500 font-bold text-xl">
          {props.data.title}
        </span>
        {props.data.desc}
      </p>
      <img src={props.data.image} alt="" />
    </div>
  );
}
