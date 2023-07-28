import React from "react";
// Data
import { activityFeatures } from "../../data";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ActivityTechniques from "../../components/ActivityTechniques";
import ActivityVideos from "../../components/ActivityVideos";
import ActivityBlogs from "../../components/ActivityBlogs";
import FeaturesBlock from "../../components/FeaturesBlock";

export default function ActivityLayout(props) {
  return (
    <>
      <ActivityHeader
        title={props.header.title}
        image={props.header.image}
        desc={props.header.desc}
      />
      <FeaturesBlock data={activityFeatures} />
      <ActivityTechniques
        title={props.activities.title}
        desc={props.activities.desc}
        types={props.activities.types}
        slug={props.activities.types.slug}
      />
      <ActivityVideos />
      <ActivityBlogs blogs={props.blogs} />
    </>
  );
}
