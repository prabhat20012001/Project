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

export default function YogaLeftImage() {
  return (
    <>
      <div className="grid grid-cols-2 mx-auto items-center">
        <img src={variation2} alt="" />

        <p className="font-semibold p-8">
          <span className="text-primary-500 font-bold text-xl">
            Three-Legged Dog Pose:
          </span>
          To practice this variation, start in Adho Mukha Svanasana and lift one
          leg towards the ceiling. Hold for a few breaths, then switch sides.
          This pose helps build strength in the legs and core.
        </p>
      </div>
      <div className="grid grid-cols-2 mx-auto items-center">
        <p className="font-semibold p-8">
          <span className="text-primary-500 font-bold text-xl">
            Puppy Pose:
          </span>{" "}
          This variation is a gentle shoulder and spine stretch. Start on your
          hands and knees, then walk your hands forward as you lower your chest
          toward the ground. Keep your hips above your knees and your arms
          extended in front of you.
        </p>
        <img src={variation3} alt="" />
      </div>
    </>
  );
}
