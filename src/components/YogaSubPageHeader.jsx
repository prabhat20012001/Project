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

export default function YogaSubPageHeader() {
  return (
    <div className=" container grid mx-auto items-center gap-2 grid-cols-2 pt-4">
      <div className="">
        <h1 className="subheading heading-primary ">Adhv Mukha Svanasana</h1>
        <p className="para pt-6">
          Adho Mukha Svanasana, also known as Downward-Facing Dog Pose, is one
          of the most recognizable yoga postures. This pose is a great way to
          stretch your hamstrings, calves, and spine and strengthen your arms,
          shoulders, and legs. It can also help calm your mind and reduce
          stress. In this article, we will explore the benefits, techniques, and
          variations of Adho Mukha Svanasana.
        </p>

        <div>
          <h2 className="text-primary-500 font-bold text-2xl pt-24">
            Variations:
          </h2>
          <p className="para">
            There are several variations of Adho Mukha Svanasana that you can
            try depending on your skill level and flexibility. Here are a few:
          </p>
        </div>
      </div>

      <div>
        <img src={adhvmukha}></img>
      </div>
    </div>
  );
}
