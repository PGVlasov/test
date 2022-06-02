import React, { useEffect } from "react";
import HomeFooter from "../components/HomeComponents/HomeFooter";
import Slider from "../components/HomeComponents/Slider";
import UsersBoughtTickets from "../components/HomeComponents/UsersBoughtTickets";

const Home = () => {
  return (
    <div className="mb-5">
      <Slider />
      <UsersBoughtTickets />
      <HomeFooter />
    </div>
  );
};

export default Home;
