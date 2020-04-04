import React from "react";
import truncate from "lodash/truncate";
import { STModal } from "./STModal";
import {
  Distributor_distributor,
  Distributor_distributor_distributor_cities,
} from "../../graphql-types/generated/Distributor";

interface DistributorCardPropsTypes {
  distributorData: Distributor_distributor;
}

export const STDistributorCard = ({
  distributorData,
}: DistributorCardPropsTypes) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
      <div
        role="menuitem"
        className="card"
        onClick={() => setIsModalOpen(!isModalOpen)}
        style={{
          cursor: "pointer",
          outline: "none",
        }}
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
                    {distributorData.distributor_cities?.length === 1
                      ? `${distributorData.distributor_cities?.length} City`
                      : `${distributorData.distributor_cities?.length} Cities`}
                  </h6>
                </span>
              </div>
            </div>
          </div>
          <h6 className="title is-6 has-text-primary">
            {distributorData.phoneNumber}
          </h6>
          <div>
            <p className="has-text-grey-light">
              {truncate(
                distributorData.distributor_cities
                  ?.map((city: Distributor_distributor_distributor_cities) => {
                    return city.city.name;
                  })
                  .join(", ")
              )}
            </p>
          </div>
        </div>
      </div>

      <STModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Distributor details"
      >
        <h4 className="title is-4">Distributing cities</h4>
        <div
          className="tags"
          style={{
            marginBottom: 20,
            display: "block",
          }}
        >
          {distributorData.distributor_cities.map((city) => (
            <span className="tag" key={city.city.id}>
              {city.city.name}
            </span>
          ))}
        </div>

        {distributorData.website && (
          <section
            style={{
              marginBottom: 20,
              display: "block",
            }}
          >
            <h4 className="title is-4">Website</h4>

            <p>
              <a
                href={distributorData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {distributorData.website}
              </a>
            </p>
          </section>
        )}

        {distributorData.email && (
          <section
            style={{
              marginBottom: 20,
              display: "block",
            }}
          >
            <h4 className="title is-4">Email</h4>

            <p>
              <a
                href={`mailto:${distributorData.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {distributorData.email}
              </a>
            </p>
          </section>
        )}

        {distributorData.bannerImageUrl ? (
          <>
            <a
              href={distributorData.bannerImageUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginBottom: 20,
                display: "block",
                textAlign: "center",
              }}
            >
              <img src={distributorData.bannerImageUrl} alt="Items banner" />
            </a>
          </>
        ) : (
          ""
        )}

        {distributorData.distributor_items?.length > 0 && (
          <section
            style={{
              marginBottom: 20,
              display: "block",
            }}
          >
            <h4 className="title is-4">Items</h4>

            <div className="content">
              <table className="table">
                <thead>
                  <tr>
                    <th>Item name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Delivery fee</th>
                  </tr>
                </thead>
                <tbody>
                  {distributorData.distributor_items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.item_category.name}</td>
                      <td>{item.price || "-"}</td>
                      <td>{item.deliveryFee || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {distributorData?.distributor_packs.length > 0 && (
          <section>
            <h4 className="title is-4">Item packs</h4>

            <div className="content">
              <table className="table">
                <thead>
                  <tr>
                    <th>Item name</th>
                    <th>Content</th>
                    <th>Price</th>
                    <th>Delivery fee</th>
                  </tr>
                </thead>
                <tbody>
                  {distributorData.distributor_packs.map((pack) => (
                    <tr key={pack.id}>
                      <td>{pack.name}</td>
                      <td>{pack.content}</td>
                      <td>{pack.price || "-"}</td>
                      <td>{pack.deliveryFee || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </STModal>
    </div>
  );
};
