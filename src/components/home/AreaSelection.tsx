import React from "react";
import Select from "react-select";
import { QueryLazyOptions } from "@apollo/react-hooks";
import { STSelectOption } from "../../types";
import { CityVariables } from "../../graphql-types/generated/City";
import { useStoreActions, useStoreState } from "../../store";

interface AreaSelectionProps {
  citiesForSelect: STSelectOption[];
  districtsForSelect: STSelectOption[];
  citiesDataLoading: boolean;
  districtsDataLoading: boolean;
  getCities: (options?: QueryLazyOptions<CityVariables> | undefined) => void;
}

export const AreaSelection = ({
  citiesForSelect,
  districtsForSelect,
  citiesDataLoading,
  districtsDataLoading,
  getCities,
}: AreaSelectionProps) => {
  const setDistrict = useStoreActions((actions) => actions.area.setDistrict);
  const district = useStoreState((state) => state.area.district);
  const setCity = useStoreActions((actions) => actions.area.setCity);
  const city = useStoreState((state) => state.area.city);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="card">
              <div className="card-content">
                <div className="columns">
                  <div className="column is-half">
                    <div className="field">
                      <div className="control">
                        <Select
                          isClearable
                          className="basic-multi-select  "
                          classNamePrefix="select"
                          placeholder="Select district"
                          options={districtsForSelect}
                          value={district || null}
                          isLoading={districtsDataLoading}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          onChange={(selectedDistrict: any) => {
                            setDistrict(selectedDistrict);
                            setCity(undefined);

                            if (selectedDistrict) {
                              getCities({
                                variables: {
                                  where: {
                                    districtId: {
                                      _eq: selectedDistrict.value,
                                    },
                                  },
                                },
                              });
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="column is-half">
                    <div className="field">
                      <div className="control">
                        <Select
                          isClearable
                          className="basic-multi-select"
                          onChange={(selectedCity) => {
                            setCity(selectedCity as STSelectOption);
                          }}
                          value={city || null}
                          classNamePrefix="select"
                          placeholder="Select city"
                          options={citiesForSelect}
                          isLoading={citiesDataLoading}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
