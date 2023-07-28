import React from "react";
import ActivityBlogs from "../../components/ActivityBlogs";
import {
  adhvmukha,
  benefits,
  precautions,
  stepsof,
  variation1,
  variation2,
  variation3,
} from "../../assets";
import { brainExercise } from "../../data";
import YogaSubPageHeader from "../../components/YogaSubPageHeader";
import YogaRightImage from "../../components/YogaRightImage";
import YogaLeftImage from "../../components/YogaLeftImage";
import YogaRightList from "../../components/YogaRightList";
import YogaLeftList from "../../components/YogaLeftList";
import Precaution from "../../components/Precaution";

export default function ActivitySubPageLayout() {
  return (
    <main className="container mx-auto  ">
      {/* ======Adhv Mukha */}
      <YogaSubPageHeader />

      {/* ==========section-2====== */}
      <YogaRightImage />
      {/* == =========section 3*/}
      <YogaLeftImage />
      {/* ==========steps of adho Mukha */}

      <YogaRightList />
      {/* ==========benefits of adho Mukha */}

      <YogaLeftList />
      {/* ========preacautions=========== */}

      <Precaution />
      <ActivityBlogs blogs={brainExercise.blogs} />
    </main>
  );
}
