import React from "react";

const PublicImage = () => {
  return (
    <img 
      src={`${process.env.PUBLIC_URL}/Images/bird_mine.JPG`} 
      alt="Public" 
      width="200" 
    />
  );
};

export default PublicImage;
