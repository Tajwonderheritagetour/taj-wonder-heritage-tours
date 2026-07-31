import { Tour } from "./types";

import { sameDayTajMahal } from "./same-day-taj-mahal";
import { tajMahalSunrise } from "./taj-mahal-sunrise";
import { sameDayJaipurTourFromDelhi } from "./same-day-jaipur-tour-from-delhi";
import { sameDayRishikeshTourFromDelhi } from "./same-day-rishikesh-tour-from-delhi";
import { agraOvernight } from "./agra-overnight-tour";
import { jaipurOvernightTourFromDelhi } from "./jaipur-overnight-tour-from-delhi";
import { rishikeshOvernightTourFromDelhi } from "./rishikesh-overnight-tour-from-delhi";
import { sameDayAgraTour } from "./same-day-agra-tour";
import { jaipurTour } from "./jaipur-tour";
import { delhiSightseeing } from "./delhi-sightseeing";
import { fatehpurSikriTour } from "./fatehpur-sikri-tour";
import { goldenTriangle5DayTour } from "./golden-triangle-5-day-tour";
import { goldenTriangle3 } from "./golden-triangle-3";
import { goldenTriangleRanthambore } from "./golden-triangle-ranthambore";
import { goldenTriangleVaranasi } from "./golden-triangle-varanasi";
import { goldenTriangleRishikesh } from "./golden-triangle-rishikesh";
import { goldenTrianglePushkar } from "./golden-triangle-pushkar";
import { rajasthanHeritage } from "./rajasthan-heritage";
import { rajasthanHeritageFromDelhi } from "./rajasthan-heritage-tour-from-delhi";
import { orchhaKhajurahoVaranasi } from "./orchha-khajuraho-varanasi";
import { centralIndiaHeritageTigerSafari } from "./central-india-heritage-tiger-safari";

export const tours: Record<string, Tour> = {
  sameDayTajMahal,
  tajMahalSunrise,
  sameDayJaipurTourFromDelhi,
  sameDayRishikeshTourFromDelhi,
  agraOvernight,
  jaipurOvernightTourFromDelhi,
  rishikeshOvernightTourFromDelhi,
  sameDayAgraTour,
  jaipurTour: jaipurTour as unknown as Tour,
  delhiSightseeing,
  fatehpurSikriTour,
  goldenTriangle5DayTour,
  goldenTriangle3,
  goldenTriangleRanthambore,
  goldenTriangleVaranasi,
  goldenTriangleRishikesh,
  goldenTrianglePushkar,
  rajasthanHeritage,
  rajasthanHeritageFromDelhi,
  orchhaKhajurahoVaranasi,
  centralIndiaHeritageTigerSafari,
};