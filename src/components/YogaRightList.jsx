import React from "react";
import {
  adhvmukha,
  benefits,
  precautions,
  stepsof,
  variation1,
  variation2,
  variation3,
} from "../assets";

export default function YogaRightList() {
  return (
    <div className="grid grid-cols-2 items-center ">
      <div>
        <img src={stepsof} alt="" />
      </div>
      <div className="p-8 font-semibold">
        <h2 className="text-2xl font-bold mb-4 text-primary-500">
          Steps of Adho Mukha Svanasana:
        </h2>
        <p>To practice Adho Mukha Svanasana, follow these steps:</p>
        <ul className="list-disc pt-4 list-inside">
          <li className="flex items-start space-x-2">
            <span className="text-primary-500 font-bold">&#10004;</span>
            <span>
              Start on your hands and knees with your wrists under your
              shoulders and your knees under your hips. Spread your fingers wide
              and press firmly into the palms of your hands.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary-500 font-bold">&#10004;</span>
            <span>
              Inhale and tuck your toes under, lifting your knees off the
              ground. Exhale and lift your hips up and back, straightening your
              arms and legs.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary-500 font-bold">&#10004;</span>
            <span>
              Keep your hands shoulder-width apart and your feet hip-width
              apart. Press your heels down towards the ground and lengthen your
              spine.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary-500 font-bold">&#10004;</span>
            <span>
              Relax your head and neck and gaze towards your belly button.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary-500 font-bold">&#10004;</span>
            <span>
              Hold the pose for 5-10 deep breaths, then exhale and release back
              to the starting position.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
