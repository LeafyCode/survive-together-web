import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { QueryLazyOptions } from "@apollo/react-hooks";
import { STSelectOption } from "../../types";
import { CityVariables } from "../../graphql-types/generated/City";

interface AreaSelectionProps {
  citiesForSelect: STSelectOption[];
  districtsForSelect: STSelectOption[];
  citiesDataLoading: boolean;
  districtsDataLoading: boolean;
  selectedCity?: STSelectOption;
  setSelectedCity: Dispatch<SetStateAction<STSelectOption | undefined>>;
  getCities: (options?: QueryLazyOptions<CityVariables> | undefined) => void;
}

export const AreaSelection = ({
  citiesForSelect,
  districtsForSelect,
  citiesDataLoading,
  districtsDataLoading,
  selectedCity,
  setSelectedCity,
  getCities,
}: AreaSelectionProps) => {
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
                          className="basic-multi-select  "
                          classNamePrefix="select"
                          placeholder="Select district"
                          options={districtsForSelect}
                          isLoading={districtsDataLoading}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          onChange={(selectedDistrict: any) => {
                            if (selectedDistrict) {
                              setSelectedCity(undefined);

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
                          className="basic-multi-select"
                          onChange={(city) => {
                            if (city) {
                              setSelectedCity(city as STSelectOption);
                            }
                          }}
                          value={selectedCity || null}
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
