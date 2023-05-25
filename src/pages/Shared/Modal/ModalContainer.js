import React from "react";
import ButtonCloseModal from "./ButtonCloseModal";

const ModalContainer = ({ closeModal, isOpen, children, className }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-twilight bg-opacity-90">
          <div className="flex items-center justify-center min-h-screen container">
            <div className="bg-white min-w-fit max-w-screen-md mx-auto rounded shadow-lg p-6">
              <ButtonCloseModal onClick={closeModal} />
              <div className={`${className} px-4 py-4`}>{children}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalContainer;
