import React from "react";
import { variation1 } from "../assets";

export default function YogaRightImage() {
  return (
    <div className="grid grid-cols-2 mx-auto items-center">
      <p className="p-8 font-semibold">
        <span className="text-primary-500 font-bold text-xl">
          Dolphin Pose:
        </span>
        This variation is similar to Adho Mukha Svanasana, but instead of
        straightening your arms, you bend your elbows and rest your forearms on
        the ground. This pose is excellent for strengthening the shoulders and
        upper back.
      </p>
      <img src={variation1} alt="" />
    </div>
  );
}
