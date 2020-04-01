import React from "react";
import { STModal } from "./STModal";

interface RequesterDataTypes {
  requesterName: string;
  city: string;
  contactNo: string;
  peopleCount: number;
}

interface STRequesterCardPropsTypes {
  requesterData: RequesterDataTypes;
}

export const STRequesterCard = ({
  requesterData,
}: STRequesterCardPropsTypes) => {
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
                <h5 className="title is-5">{requesterData.requesterName}</h5>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <span className="tag is-warning">
                  <h6 className="subtitle is-6 is-right">
                    {requesterData.city}
                  </h6>
                </span>
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <h6 className="title is-6 has-text-primary">
                {requesterData.contactNo}
              </h6>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <h6 className="subtitle is-6 has-text-grey-light">
                  {requesterData.peopleCount} People
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <STModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
