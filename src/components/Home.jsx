import React from "react";
import profileImage from "../assets/my_image.jpg";

const Home = (props) => {
  return (
    <div className="mt-32 p-3 mt-4 flex justify-around items-center">
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl  flex justify-center">{props.homeData.homeHeader}</h2>
        <h2 className="text-6xl flex justify-center mt-10">
        {props.homeData.yourNameText}
        </h2>
      </div>
      <img src={profileImage} width="40%" height="600px" alt='profile icon'/>
    </div>
  );
};

export default Home;
