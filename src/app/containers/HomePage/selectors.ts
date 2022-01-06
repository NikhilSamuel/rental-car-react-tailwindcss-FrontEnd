import { createSelector } from "reselect";
import { IAppRootState } from "../../../typings";

const selectHomePage = (state: IAppRootState) => state.homePage;

export const makeSelectTopCars = createSelector(
  selectHomePage,
  (homePage) => homePage.topCars
);
