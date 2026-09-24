import React from 'react';
import BannerSection from './Components/Workouts/banner';
import Workout from "./Components/Workouts/workouts";


const mainPage = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <Workout></Workout>
    </div>
  );
};

export default mainPage;