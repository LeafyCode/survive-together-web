import { createStore, createTypedHooks } from "easy-peasy";
import { AreaModel, area } from "./model/area";

export interface StoreModel {
  area: AreaModel;
}

const model: StoreModel = {
  area,
};

export const store = createStore(model);

const typedHooks = createTypedHooks<StoreModel>();

// We export the hooks from our store as they will contain the
// type information on them
export const { useStoreActions } = typedHooks;
export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
