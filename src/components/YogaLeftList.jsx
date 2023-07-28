import React from "react";
import { benefits } from "../assets";
export default function YogaLeftList() {
  return (
    <div className="grid grid-cols-2 items-center ">
      <div className="p-8 font-semibold">
        <h2 className="text-2xl font-bold mb-4 text-primary-500">
          Benefits of Adho Mukha Svanasana:
        </h2>
        <p>
          There are numerous benefits to practicing Adho Mukha Svanasana,
          including:
        </p>
        <ul className="pt-4">
          <li className="text-gray-800">
            <span className="text-primary-500 font-bold text-lg">
              &#10004; Increases flexibility:
            </span>
            This pose stretches the hamstrings, calves, and spine, which can
            help increase flexibility in these areas.
          </li>
          <li className="text-gray-800">
            <span className="text-primary-500 font-bold text-lg">
              &#10004; Strengthens the upper body:
            </span>
            Adho Mukha Svanasana is an excellent pose for strengthening the
            arms, shoulders, and upper back.
          </li>
          <li className="text-gray-800">
            <span className="text-primary-500 font-bold text-lg">
              &#10004; Relieves stress:
            </span>
            This pose can help calm the mind and reduce stress and anxiety.
          </li>
          <li className="text-gray-800">
            <span className="text-primary-500 font-bold text-lg">
              &#10004; Improves digestion:
            </span>
            The inversion of the pose can help improve digestion and relieve
            constipation.
          </li>
          <li className="text-gray-800">
            <span className="text-primary-500 font-bold text-lg">
              &#10004; Energizes the body:
            </span>
            Adho Mukha Svanasana can help boost energy levels by increasing
            blood flow to the brain.
          </li>
        </ul>
      </div>
      <div>
        <img src={benefits} alt="" />
      </div>
    </div>
  );
}
