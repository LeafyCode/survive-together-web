import React from "react";
import { STModal } from "./STModal";

interface CityType {
  id: string;
  name: string;
  location: {
    type: string;
    crs: {
      type: string;
      properties: {
        name: string;
      };
    };
    coordinates: number[];
  };
  districtId: string;
}

interface DistributorCityType {
  city: CityType;
}

interface DistributorPackageType {
  id: string;
  name: string;
  price: string;
  deliveryFee: string;
  content: string[];
}

interface DistributorItemTypes {
  id: string;
  name: string;
  price: string;
  deliveryFee: string;
}

interface DistributorCardPropsTypes {
  id?: string;
  name?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  active?: boolean;
  distributor_items?: DistributorItemTypes[];
  distributor_packs?: DistributorPackageType[];
  distributor_cities: DistributorCityType[];
}

export const STDistributorCard = (
  distributorData: DistributorCardPropsTypes
) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div
        role="menuitem"
        aria-hidden="true"
        className="card"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column">
              <div>
                <h5 className="title is-5">{distributorData.name}</h5>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <span className="tag is-warning">
                  <h6 className="subtitle is-6 is-right">
                    {distributorData.distributor_items?.length === 1
                      ? `${distributorData.distributor_items?.length} Item`
                      : `${distributorData.distributor_items?.length} Items`}
                  </h6>
                </span>
              </div>
            </div>
          </div>
          <h6 className="title is-6 has-text-primary">
            {distributorData.phoneNumber}
          </h6>
          <div>
            <h6 className="subtitle is-6 has-text-grey-light">
              Available on{" "}
              {distributorData.distributor_cities?.length === 1
                ? `${distributorData.distributor_cities?.length} city`
                : `${distributorData.distributor_cities?.length} cities`}
            </h6>
            <p>
              {distributorData.distributor_cities?.map(
                (city: DistributorCityType) => {
                  return `${city.city.name}, `;
                }
              )}
            </p>
          </div>
        </div>
      </div>
      <STModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
