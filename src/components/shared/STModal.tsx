import React, { Dispatch, SetStateAction } from "react";

interface STModalPropsType {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const STModal = ({ isModalOpen, setIsModalOpen }: STModalPropsType) => {
  return (
    <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
      <div className="modal-background">Ase</div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={() => setIsModalOpen(false)}
          >
            Ase
          </button>
        </header>
        <section className="modal-card-body" />
        <footer className="modal-card-foot" />
      </div>
    </div>
  );
};
