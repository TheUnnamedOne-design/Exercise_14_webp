import React from "react";
import PublicImage from "./components/PublicImage";
import SrcImage from "./components/SrcImage";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  return (
    <div>
      <h1>React Components Showcase</h1>
      <PublicImage />
      <br></br>
      <SrcImage />
      <br></br>
      <LoginForm />
      <br></br>
      <br></br>
      <ProfilePage />
    </div>
  );
};

export default App;
