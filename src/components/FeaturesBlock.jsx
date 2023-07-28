import React from "react";

export default function FeaturesBlock(props) {
  return (
    <section className="container mx-auto bg-primary-10 px-6 py-8 grid grid-cols-3 text-center rounded-2xl">
      {props.data.map((value, index) => {
        return (
          <div key={index}>
            <img
              src={value.image}
              alt="Icon 2"
              className="w-16 h-16 object-contain mx-auto"
            />
            <h4 className="font-bold text-lg">{value.name}</h4>
          </div>
        );
      })}
    </section>
  );
}
