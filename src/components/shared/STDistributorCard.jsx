import React from "react";
import { STModal } from "./STModal";

// interface STDistributorCardPropsTypes {
//   id: string;
//   name: string;
//   phoneNumber: string;
//   email: string;
//   website: string;
//   active: boolean;
// }

export const STDistributorCard = () => {
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
                <h5 className="title is-5">Keels super</h5>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <span className="tag is-warning">
                  <h6 className="subtitle is-6 is-right">+50 Items</h6>
                </span>
              </div>
            </div>
          </div>
          <h6 className="title is-6 has-text-primary">+94 77 65456456</h6>
          <div>
            <h6 className="subtitle is-6 has-text-grey-light">
              Available on 30 cities
            </h6>
            <p>Galle, Kottawa, Kasbawa, Horana, Kandy</p>
          </div>
        </div>
      </div>
      <STModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
