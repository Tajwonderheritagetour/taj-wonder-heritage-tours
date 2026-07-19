import { Tour } from "./types";

import { agraOvernight } from "./agra-overnight-tour";
import { sameDayTajMahal } from "./same-day-taj-mahal";
import { tajMahalSunrise } from "./taj-mahal-sunrise";
import { sameDayAgraTour } from "./same-day-agra-tour";
import { fatehpurSikriTour } from "./fatehpur-sikri-tour";
import { delhiSightseeing } from "./delhi-sightseeing";
import { goldenTriangle5DayTour } from "./golden-triangle-5-day-tour";
import { goldenTriangle3 } from "./golden-triangle-3";
import { goldenTriangleRanthambore } from "./golden-triangle-ranthambore";
import { jaipurTour } from "./jaipur-tour";
import { rajasthanHeritage } from "./rajasthan-heritage";

export const tours: Record<string, Tour> = {
  agraOvernight,
  sameDayTajMahal,
  tajMahalSunrise,
  sameDayAgraTour,
  fatehpurSikriTour,
  delhiSightseeing,
  goldenTriangle5DayTour,
  goldenTriangle3,
  goldenTriangleRanthambore,
  jaipurTour: jaipurTour as unknown as Tour,
  rajasthanHeritage,
};