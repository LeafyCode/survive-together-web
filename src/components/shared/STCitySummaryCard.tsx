import React from "react";
import { useHistory } from "react-router-dom";
import { CityByNeeds_city } from "../../graphql-types/generated/CityByNeeds";
import { City_city_city_translations } from "../../graphql-types/generated/City";
import { useStoreActions } from "../../store";

interface STCitySummaryCardProps {
  city: CityByNeeds_city;
}

export const STCitySummaryCard = ({ city }: STCitySummaryCardProps) => {
  const setDistrict = useStoreActions((actions) => actions.area.setDistrict);
  const setCity = useStoreActions((actions) => actions.area.setCity);

  const history = useHistory();
  const cityNameSI = city?.city_translations.find(
    (cityTranslation: City_city_city_translations) => {
      return cityTranslation.language === "si";
    }
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      tabIndex={0}
      role="button"
      className="column is-full-mobile is-half-tablet is-one-quarter-desktop"
      style={{
        cursor: "pointer",
        outline: "none",
      }}
      // onClick={() => {
      //   setDistrict({
      //     value: city.district.id,
      //     label: city.district.name,
      //   });
      //   setCity({
      //     value: city.id,
      //     label: `${city.name}${cityNameSI?.text ? ` ${cityNameSI.text}` : ""}`,
      //   });
      //
      //   history.push("/requests");
      // }}
    >
      <div role="menuitem" aria-hidden="true" className="card">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column">
              <div>
                <p className="title is-5">{`${city.name}${
                  cityNameSI?.text ? ` ${cityNameSI.text}` : ""
                }`}</p>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <div className="tags has-addons">
                  <span className="tag is-primary">
                    {city.needs_aggregate.aggregate?.count}
                  </span>
                  <span className="tag ">requests</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="subtitle is-6 has-text-grey-light">
              District: {city.district.name}
            </p>

            <p>
              <strong>Distributors: </strong>{" "}
              <span className="tag">
                {city.distributor_cities_aggregate.aggregate?.count}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
