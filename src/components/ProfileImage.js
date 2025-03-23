import React from "react";

const ProfileImage = () => {
  return (
    <img 
      src={`${process.env.PUBLIC_URL}/Images/Aditya_image.JPG`} 
      alt="Profile" 
      width="150" 
    />
  );
};

export default ProfileImage;
