import React, { Dispatch, SetStateAction } from "react";

interface STModalPropsType {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}

export const STModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  children,
}: STModalPropsType) => {
  return (
    <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={() => setIsModalOpen(false)}
          />
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot" />
      </div>
    </div>
  );
};
