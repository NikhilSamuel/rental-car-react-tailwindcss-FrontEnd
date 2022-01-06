import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import { responsive } from "../../components/responsive/carousel";
import carService from "../../services/carService";
import { Dispatch } from "@reduxjs/toolkit";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopCars } from "./selectors";
import { createSelector } from "reselect";
import MoonLoader from "react-spinners/MoonLoader";

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
  items-center
  flex
  flex-wrap 
  justify-center 
  mt-7 
  md:mt-10 
`}
`;

const EmptyCars = styled.div`
  ${tw`
  flex
  items-center
  justify-center
  text-sm
  text-gray-500 
`}
`;

const LoadingSection = styled.div`
  ${tw`
  flex
  items-center
  justify-center
  text-base
  text-black
`}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));
export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const slideIndexHandler = (e: EventObject) => {
    setCurrent(e.item);
  };

  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    setLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.log("error:", err);
    });

    console.log("Cars:", cars);
    if (cars) setTopCars(cars);
    setLoading(false);
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;
  const cars =
    (!isEmptyTopCars &&
      topCars.map((car) => <Car thumbnailSrc={car.thumbnailUrl} {...car} />)) ||
    [];

  return (
    <TopCarsContainer>
      <Title>Explore our top deals</Title>
      {isLoading && (
        <LoadingSection>
          <MoonLoader loading />
        </LoadingSection>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars to show!</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <AliceCarousel
            activeIndex={current}
            onSlideChange={slideIndexHandler}
            disableButtonsControls
            mouseTracking
            controlsStrategy="responsive"
            keyboardNavigation={true}
            items={cars}
            responsive={responsive}
          />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}
