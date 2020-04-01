import React from "react";
import { STModal } from "./STModal";
import { LatestNeeds_need } from "../../graphql-types/generated/LatestNeeds";

interface STRequestCardPropsTypes {
  needData: LatestNeeds_need;
}

export const STRequestCard = ({ needData }: STRequestCardPropsTypes) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
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
                <p className="title is-5">{needData.contactPersonName}</p>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <span className="tag is-warning">
                  <p className="subtitle is-6 is-right">{needData.city.name}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <p className="has-text-grey-light ">{needData.contactNumber}</p>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <div className="tags has-addons">
                  <span className="tag is-primary">
                    {needData.numberOfPeople}
                  </span>
                  <span className="tag ">people</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <STModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};
