import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { mens_jacket } from "../Data/Crease/mens_jacket";
import { mens_pants } from "../Data/Crease/mens_pant";
import { mens_shirt } from "../Data/Crease/mens_shirt";
import { mens_shoes } from "../Data/Crease/mens_shoes";
import { womens_shirt } from "../Data/Crease/women_shirt";
import { womens_jacket } from "../Data/Crease/womens_jacket";
import { womens_pants } from "../Data/Crease/womens_pants";
import { womens_shoes } from "../Data/Crease/womens_shoes";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={mens_jacket} section={"Men's Jacket"} />
        <HomeProductSection data={mens_pants} section={"Men's Pants"} />
        <HomeProductSection data={mens_shirt} section={"Men's Shirt"} /> 
        <HomeProductSection data={mens_shoes} section={"Men's Shoe"} />
        <HomeProductSection data={womens_shirt} section={"Women's Shirt"} />
        <HomeProductSection data={womens_jacket} section={"Women's jacket"} />
        <HomeProductSection data={womens_pants} section={"Women's Pants"} />
        <HomeProductSection data={womens_shoes} section={"Women's Shoes"} />
      </div>

      
    </div>
  );
};

export default Homepage;
