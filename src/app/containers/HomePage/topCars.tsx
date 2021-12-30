import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Icar } from "../../../typings/car";
import { Car } from "../../components/car";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import { responsive } from "../../components/responsive/carousel";

const TopCarsContainer = styled.div`
  ${tw`
   max-w-screen-lg
   w-full
   flex
   flex-col
   items-center
   justify-center
   pr-4 
   pl-4 
   md:pl-0 
   md:pr-0 
   mb-10
 `}
`;

const Title = styled.h2`
  ${tw`
  text-3xl 
  lg:text-5xl 
  text-black 
  font-extrabold
`}
`;

const CarsContainer = styled.div`
  ${tw`
  w-full
  flex
  flex-wrap 
  justify-center
  mt-7 
  md:mt-10 
`}
`;

export function TopCars() {
  const [current, setCurrent] = useState(0);

  const slideIndexHandler = (e: EventObject) => {
    setCurrent(e.item);
  };

  const testCar: Icar = {
    name: "Audi S3 Car",
    mileage: "10km",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: Icar = {
    name: "Honda City",
    mileage: "20km",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  return (
    <TopCarsContainer>
      <Title>Explore our top deals</Title>
      <CarsContainer>
        <AliceCarousel
          activeIndex={current}
          onSlideChange={slideIndexHandler}
          disableButtonsControls
          mouseTracking
          controlsStrategy="default"
          keyboardNavigation={true}
          items={[
            <Car {...testCar} />,
            <Car {...testCar2} />,
            <Car {...testCar} />,
            <Car {...testCar2} />,
            <Car {...testCar} />,
          ]}
          responsive={responsive}
        />
      </CarsContainer>
    </TopCarsContainer>
  );
}
