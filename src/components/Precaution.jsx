import React from "react";
import { precautions } from "../assets";

export default function Precaution() {
  return (
    <div className="grid grid-cols-2 items-center ">
      <div>
        <img src={precautions} alt="" />
      </div>
      <div>
        <div className="p-8 font-semibold">
          <h2 className="text-2xl font-bold mb-4 text-primary-500">
            Precautions:
          </h2>
          <p className="pt-3">
            While Adho Mukha Svanasana is a safe and beneficial pose for most
            people, there are a few precautions to remember:
          </p>
          <ul className=" pt-4">
            <li className="text-gray-800">
              <span className="text-primary-500  font-bold ">&#10004;</span>
              Avoid this pose if you have a wrist, shoulder, or back injury.
            </li>
            <li className="text-gray-800">
              <span className="text-primary-500 font-bold">&#10004;</span>
              If you have high blood pressure, keep your head at or above heart
              level to avoid a sudden increase in blood pressure.
            </li>
            <li className="text-gray-800">
              <span className="text-primary-500  font-bold">&#10004;</span>
              If you have a neck injury, keep your head aligned with your spine
              instead of looking towards your belly button.
            </li>
            <li className="text-gray-800">
              <span className="text-primary-500  font-bold">&#10004;</span>
              If you have tight hamstrings, bend your knees slightly to avoid
              straining your lower back.
            </li>
          </ul>
          <p className="text-gray-800 font-semibold mt-4 pt-4">
            Adho Mukha Svanasana is a versatile pose that yogis of all skill
            levels can practice. Whether you want to increase your flexibility,
            strengthen your upper body, or reduce stress, this pose has much to
            offer. You can safely practice this pose and enjoy its many benefits
            by following the proper technique and taking necessary precautions.
            So next time you step onto your yoga mat, include Adho Mukha
            Svanasana in your practice!
          </p>
        </div>
      </div>
    </div>
  );
}
