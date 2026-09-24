import React from 'react';
import BannerSection from './workouts/banner';
import Workout from "./workouts/workouts";


const mainPage = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <Workout></Workout>
    </div>
  );
};

export default mainPage;