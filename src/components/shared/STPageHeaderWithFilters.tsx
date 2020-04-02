import React from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import Select from "react-select";
import { useStoreActions, useStoreState } from "../../store";
import { STSelectOption } from "../../types";
import {
  getCitiesForSelect,
  getDistrictsForSelect,
} from "../../helpers/sharedHelpers";
import { District } from "../../graphql-types/generated/District";
import { DISTRICT } from "../../graphql-types/district";
import { City, CityVariables } from "../../graphql-types/generated/City";
import { CITIES } from "../../graphql-types/city";

interface STPageHeaderWithFiltersProps {
  title: string;
  subTitle: string;
}

export const STPageHeaderWithFilters = ({
  title,
  subTitle,
}: STPageHeaderWithFiltersProps) => {
  const setDistrict = useStoreActions((actions) => actions.area.setDistrict);
  const district = useStoreState((state) => state.area.district);
  const setCity = useStoreActions((actions) => actions.area.setCity);
  const city = useStoreState((state) => state.area.city);

  const { loading: districtsDataLoading, data: districtsData } = useQuery<
    District
  >(DISTRICT);
  const [
    getCities,
    { loading: citiesDataLoading, data: citiesData },
  ] = useLazyQuery<City, CityVariables>(CITIES);

  const districtsForSelect: STSelectOption[] = getDistrictsForSelect(
    districtsData?.district
  );
  const citiesForSelect: STSelectOption[] = getCitiesForSelect(
    citiesData?.city
  );

  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subTitle}</h2>
          <div className="columns">
            <div className="column is-half">
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <Select
                        isClearable
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select district"
                        value={district || null}
                        options={districtsForSelect}
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
                <div className="column">
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
    </section>
  );
};
