import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { STPageHeader } from "../components/shared/STPageHeader";
import { STInput } from "../components/shared/STInput";

const STFormContainer = styled.div`
  padding: 20px;
`;

export const CreateDistributor = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(() => {});

  return (
    <div>
      <STPageHeader
        title="Add distributor"
        subTitle="Enter new distributor details"
      />

      <STFormContainer className="container">
        <form onSubmit={onSubmit}>
          <div className="columns is-multiline">
            <div className="column">
              <STInput
                register={register}
                name="name"
                label="Distributor name"
              />
            </div>

            <div className="column ">
              <code>is-one-quarter</code>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column">
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link" type="submit">
                    Submit
                  </button>
                </div>
                <div className="control">
                  <Link
                    className="button is-link is-light"
                    type="button"
                    to="/"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </STFormContainer>
    </div>
  );
};
