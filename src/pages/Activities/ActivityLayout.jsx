import React from "react";
import ActivityHeader from "../../components/ActivityHeader";
import ActivityTechniques from "../../components/ActivityTechniques";
import ActivityVideos from "../../components/ActivityVideos";
import ActivityBlogs from "../../components/ActivityBlogs";

export default function ActivityLayout(props) {
  return (
    <>
      <ActivityHeader
        title={props.header.title}
        image={props.header.image}
        desc={props.header.desc}
      />
      <ActivityTechniques
        title={props.activities.title}
        desc={props.activities.desc}
        types={props.activities.types}
      />
      <ActivityVideos />
      <ActivityBlogs blogs={props.blogs} />
    </>
  );
}
