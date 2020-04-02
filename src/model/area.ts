import { Action, action } from "easy-peasy";
import { STSelectOption } from "../types";

export interface AreaModel {
  district?: STSelectOption;
  city?: STSelectOption;
  setDistrict: Action<AreaModel, STSelectOption | undefined>;
  setCity: Action<AreaModel, STSelectOption | undefined>;
}

export const area: AreaModel = {
  district: undefined,
  city: undefined,
  setDistrict: action((state, payload) => {
    // eslint-disable-next-line no-param-reassign
    state.district = payload;
  }),
  setCity: action((state, payload) => {
    // eslint-disable-next-line no-param-reassign
    state.city = payload;
  }),
};
